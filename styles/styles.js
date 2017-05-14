'use strict';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  rateContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 40,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: 'white',
    paddingHorizontal: 30,
  },
  rateProfileImg: {
    height: 30,
    width: 30,
    alignSelf: 'flex-end',
  },
  rateThumb: {
    height: 100,
    width: 100,
    marginVertical: 30,
  },
  userPosts: {
    marginTop: 10,
    paddingHorizontal: 40,
    marginBottom: 180,
  },
  userTite: {
    fontSize: 35,
    fontWeight: 'bold',
    fontFamily: "Verdana",
    color: '#3d8af7',
    letterSpacing: -4,
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
  userProfileImg: {
    height: 90,
    width: 90,
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
  tagForSubmit: {
    marginVertical: 7,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#9ec4ff',
    color: '#0844a4'
  },
  tagOnCarousel: {
    marginVertical: 7,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#9ec4ff',
    color: '#0844a4',
    fontWeight: 'bold',
    marginHorizontal: 5,
  },
  listview: {
    flex: 1,
    flexDirection: 'column'
  },
  post: {
    paddingHorizontal: 0,
    borderWidth: 1,
    borderColor: '#3d8af7',
    paddingVertical: 0,
    marginVertical: 5,
    borderRadius: 4,
  },
  innerPost: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 20,
  },
  postTitle: {
    color: '#3d8af7',
  },
  thumbPost: {
    height: 30,
    width: 30,
  },
  postImg: {
    height: 50,
    width: 50,
  },
  countContainer: {
    marginLeft: 40,
    flexDirection: 'row',
    marginTop: 15,
  },
  countSection: {
    flexDirection: 'row',
    marginRight: 7,
  },
  thumbcount: {
    marginHorizontal: 7,
    height: 20,
    width: 20,
  },
  tagCarousel: {
    flex: 1,
  },
  tagSection: {
    backgroundColor: '#3d8af7',
    flexDirection: 'row',
    paddingVertical: 5,
    paddingHorizontal: 10,
  },
  tag: {
    color: '#fff',
    marginRight: 10,
  }
});

export default styles;
