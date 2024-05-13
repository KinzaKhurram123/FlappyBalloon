import React, {useState, useEffect} from 'react';
import {
  View,
  Image,
  Text,
  TouchableOpacity,
  StyleSheet,
  Dimensions,
  ImageBackground,
} from 'react-native';
import images from '../../constant/images';

const windowWidth = Dimensions.get('window').width;
const windowHeight = Dimensions.get('window').height;

const Home = () => {
  const [baloonBottom, setbaloonBottom] = useState(windowHeight / 2);
  const [pipes, setPipes] = useState([]);
  const [score, setScore] = useState(0);
  const [gameOver, setGameOver] = useState(false);
  const gravity = 3;
  const pipeWidth = 60;
  const pipeHeight = 300;
  const gapHeight = 200;
  const ballonWidth = 50;
  const baloonHeight = 50;

  useEffect(() => {
    if (!gameOver) {
      const gameTimer = setInterval(() => {
        moveBaloon();
        movePipes();
        checkCollision();
        updateScore();
      }, 30);
      return () => clearInterval(gameTimer);
    }
  }, [baloonBottom, pipes]);

  const moveBaloon = () => {
    setbaloonBottom(baloonBottom => baloonBottom - gravity);
  };

  const jump = () => {
    if (baloonBottom < windowHeight - baloonHeight) {
      setbaloonBottom(baloonBottom => baloonBottom + 50);
    }
  };

  const generatePipes = () => {
    let newPipes = [];
    const gap = Math.random() * (windowHeight - 300);
    const topPipeHeight = gap;
    const bottomPipeHeight = windowHeight - gap - gapHeight;

    newPipes.push({
      top: topPipeHeight,
      bottom: bottomPipeHeight,
      left: windowWidth,
    });
    setPipes(pipes.concat(newPipes));
  };

  const movePipes = () => {
    setPipes(pipes =>
      pipes.map(pipe => ({
        ...pipe,
        left: pipe.left - 3,
      })),
    );

    if (pipes.length > 0 && pipes[0].left < -pipeWidth) {
      setPipes(pipes => pipes.slice(1));
    }

    if (
      pipes.length === 0 ||
      pipes[pipes.length - 1].left < windowWidth - 200
    ) {
      generatePipes();
    }
  };

  const checkCollision = () => {
    const ballonTop = baloonBottom;
    const baloonRight = windowWidth / 2 + ballonWidth / 2;
    const baloonLeft = windowWidth / 2 - ballonWidth / 2;

    pipes.forEach(pipe => {
      const pipeTop = pipe.top;
      const pipeBottom = pipe.top + gapHeight;
      const pipeLeft = pipe.left;
      const pipeRight = pipe.left + pipeWidth;

      if (
        baloonRight > pipeLeft &&
        baloonLeft < pipeRight &&
        (ballonTop < pipeTop || ballonTop + baloonHeight > pipeBottom)
      ) {
        gameOverHandler();
      }
    });
  };

  const updateScore = () => {
    pipes.forEach(pipe => {
      if (pipe.left === windowWidth / 2 - pipeWidth / 2) {
        setScore(score + 1);
      }
    });
  };

  const gameOverHandler = () => {
    setGameOver(true);
    setPipes([]);
  };

  const onPressReplay = () => {
    setGameOver(false);
  };

  return (
    <ImageBackground source={images.splash_screen} style={styles.container}>
      <TouchableOpacity
        onPress={() => jump()}
        style={{
          flex: 1,
          justifyContent: 'center',
          width: ballonWidth,
          height: baloonHeight,
        }}>
        <Image
          source={images.dark_blue_baloon}
          style={{
            position: 'absolute',
            bottom: baloonBottom,
            left: windowWidth / 2 - ballonWidth / 2,
          }}
        />
      </TouchableOpacity>
      {pipes.map((pipe, index) => (
        <View
          key={index}
          style={{
            position: 'absolute',
            width: pipeWidth,
            height: pipe.top,
            backgroundColor: 'green',
            left: pipe.left,
            bottom: 0,
          }}
        />
      ))}
      {pipes.map((pipe, index) => (
        <View
          key={index}
          style={{
            position: 'absolute',
            width: pipeWidth,
            height: pipe.bottom,
            backgroundColor: 'green',
            left: pipe.left,
            bottom: 0,
            top: pipe.top + gapHeight,
          }}
        />
      ))}
      {gameOver && (
        <View style={styles.gameOverContainer}>
          <Text style={styles.gameOverText}>Game Over</Text>
          <Text style={styles.scoreText}>Score: {score}</Text>
          <TouchableOpacity
            style={{marginTop: 20}}
            onPress={() => onPressReplay()}>
            <Text style={styles.replay_text}>Replay</Text>
          </TouchableOpacity>
        </View>
      )}

      <Text style={styles.scoreLabel}>Score: {score}</Text>
    </ImageBackground>
  );
};

export default Home;

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: 'skyblue',
  },
  gameOverContainer: {
    position: 'absolute',
    width: '100%',
    height: '100%',
    justifyContent: 'center',
    alignItems: 'center',
  },
  gameOverText: {
    fontSize: 36,
    fontWeight: 'bold',
    color: 'red',
  },
  scoreText: {
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  scoreLabel: {
    position: 'absolute',
    top: 50,
    left: 20,
    fontSize: 24,
    fontWeight: 'bold',
    color: 'black',
  },
  replay_text: {
    fontSize: 20,
    fontWeight: 'bold',
    color: 'black',
  },
});
