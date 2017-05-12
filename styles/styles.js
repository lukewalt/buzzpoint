'use strict';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
  },
  instructions: {
    textAlign: 'center',
    color: '#3d8af7',
    fontWeight: 'bold',
    fontSize: 50,
    fontFamily: "Verdana",
    letterSpacing: -6,
  },
  small: {
    margin: 10,
    fontWeight: 'normal',
    fontSize:20,
    color: '#3d8af7',
  },
  thepost: {
    borderColor: '#fbb767',
    backgroundColor: '#fbb767',
    alignSelf: 'stretch',
    paddingHorizontal: 80,
    paddingVertical: 7,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 45,
    fontFamily: "Verdana",
    letterSpacing: -6,
  },
  textInput: {
    height: 100,
    marginHorizontal: 20,
    paddingHorizontal: 20,
    borderColor: '#3d8af7',
    borderWidth: 1,
    borderRadius: 7,
    color: '#3d8af7',
    overflow: 'visible',
  },
  imgBarCont: {
    flexDirection: 'row',
    justifyContent: 'space-between'
  },
  img: {
    marginVertical: 10,
    marginHorizontal: 30,
    height: 120,
    width: 120,
  },
  address: {
    marginVertical: 10,
    textAlign: 'left',
    color: '#3d8af7',
    fontWeight: 'bold',
  },
});

export default styles;
