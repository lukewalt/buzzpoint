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
    paddingHorizontal: 30,
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
    marginTop: 15,
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
    paddingHorizontal: 20,
    borderColor: '#3d8af7',
    borderWidth: 1,
    borderRadius: 7,
    color: '#3d8af7',
    overflow: 'visible',
  },
  imgBarCont: {
    flexDirection: 'row',
    justifyContent: 'space-between',
  },
  img: {
    marginVertical: 10,
    marginHorizontal: 30,
    height: 120,
    width: 120,
  },
  address: {
    margin: 10,
    textAlign: 'left',
    color: '#3d8af7',
    fontWeight: 'bold',
  },
  tagList: {
    flexDirection: 'row',
    justifyContent: 'space-between',
    alignSelf: 'stretch',
    flexWrap: 'wrap',
  },
  tag: {
    marginVertical: 7,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#9ec4ff',
    color: '#0844a4'
  }
});

export default styles;
