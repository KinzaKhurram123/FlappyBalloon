import {StyleSheet} from 'react-native';

export const styles = StyleSheet.create({
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
