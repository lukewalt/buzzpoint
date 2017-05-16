'use strict';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  loginRegisterContainer: {
    backgroundColor: '#3d8af7',
    flex: 1,
    // justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 25,
  },
  rateContainer: {
    flex: 1,
    paddingTop: 100,
    paddingHorizontal: 25,
  },
  tabContainer: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingHorizontal: 25,
  },
  zonePosts: {
    paddingHorizontal: 25,
    marginVertical: 20,
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
    paddingHorizontal: 25,
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
    paddingVertical: 7,
    textAlign: 'center',
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 45,
    fontFamily: "Verdana",
    letterSpacing: -6,
  },
  signRegInput: {
    height: 50,
    paddingLeft: 20,
    marginVertical: 10,
    backgroundColor: '#fff',
    borderRadius: 5,
    color: '#3d8af7',
  },
  loginButton: {
    color: '#fff',
    fontWeight: 'bold',
    fontSize: 40,
    paddingVertical: 15,
    margin: 10,
    textAlign: 'center',
  },
  textInput: {
    height: 100,
    paddingHorizontal: 20,
    borderColor: '#3d8af7',
    borderWidth: 1,
    borderRadius: 7,
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
    marginLeft: 25,
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
  },
  zones: {
    marginTop: 7,
    backgroundColor: '#3d8af7',
    color: '#fff',
    fontSize: 50,
    textAlign: 'center',
    paddingVertical: 25,
    fontFamily: "Verdana",
    fontWeight: 'bold',
    letterSpacing: -6,
  },
  searchBarBackground: {
    backgroundColor: '#3d8af7',
    marginTop: 65,
    height: 50,
  },
  searchBar: {
    margin: 10,
    paddingLeft: 25,
    fontSize: 15,
    height: 1,
    backgroundColor: '#fff',
    flex: .1,
    borderRadius: 3,
  },
  modalContainer: {
   paddingTop: 20,
   flex: 1
  },
   scrollView: {
     flexDirection: 'row',
     flexWrap: 'wrap',
     justifyContent: 'flex-start'
   },
   preview: {
     flex: 1,
     justifyContent: 'flex-end',
     alignItems: 'center'
   },
   capture: {
     flex: 0,
     backgroundColor: '#fff',
     borderRadius: 5,
     color: '#000',
     padding: 10,
     margin: 40
   }
});

export default styles;
