'use strict';

import { StyleSheet } from 'react-native'

const styles = StyleSheet.create({
  container: {
    flex: 1,
  },
  banner: {
    fontWeight: 'bold',
    color: '#3d8af7',
    fontSize: 30,
    alignItems: 'baseline',
    fontFamily: 'GillSans-UltraBold',
    letterSpacing: -4,
  },
  loginRegisterContainer: {
    backgroundColor: '#3d8af7',
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    paddingTop: 100,
    paddingHorizontal: 25,
  },
  rateContainer: {
    flex: 1,
    paddingTop: 0,
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
    marginTop: 10,
    marginBottom: 70
  },
  tagAggregate: {
    paddingHorizontal: 25,
    marginTop: 80,
    paddingBottom: 200,
    marginBottom: 60,
  },
  rateProfileImg: {
    height: 28,
    width: 28,
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
    marginBottom: 275,
  },
  userTite: {
    fontSize: 21,
    fontWeight: 'bold',
    fontFamily: "GillSans-UltraBold",
    color: '#3d8af7',
    letterSpacing: -3,
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
    fontSize: 40,
    fontFamily: 'GillSans-UltraBold',
    letterSpacing: -4,
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
    height: 80,
    paddingHorizontal: 20,
    borderColor: '#3d8af7',
    color: '#3d8af7',
    borderWidth: 1,
    borderRadius: 7,
    overflow: 'visible',
  },
  imgBarCont: {
    flexDirection: 'row',
    justifyContent: 'center',
    alignItems: 'center',
  },
  img: {
    marginVertical: 10,
    marginHorizontal: 30,
    height: 100,
    width: 100,
  },
  userProfileImg: {
    height: 90,
    width: 90,
    marginVertical: 10,
  },
  address: {
    marginVertical: 10,
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
    color: '#0844a4',
    textAlign: 'center',
    fontWeight: 'bold',

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
  tagPosts: {
    marginVertical: 7,
    paddingVertical: 10,
    paddingHorizontal: 25,
    backgroundColor: '#fbb767',
    borderRadius: 3,
    color: '#fff',
    textAlign: 'center',
    fontWeight: 'bold',

  },
  listview: {
    flex: 1,
    flexDirection: 'column'
  },
  post: {
    borderWidth: 1,
    borderColor: '#3d8af7',
    paddingVertical: 0,
    marginVertical: 5,
    borderRadius: 3,
  },
  innerPost: {
    flex: 1,
    flexDirection: 'row',
    justifyContent: 'space-around',
    paddingVertical: 30,
    alignItems: 'center',
    paddingHorizontal: 7,
  },
  commentSect: {
    flexDirection: 'column',
    maxWidth: 150,
    overflow: 'hidden',
    paddingHorizontal: 10,
  },
  postTitle: {
    color: '#3d8af7',
    fontSize: 12,
  },
  thumbPost: {
    height: 30,
    width: 30,
    alignSelf: 'center',
  },
  postImg: {
    height: 50,
    width: 50,
  },
  countContainer: {
    marginLeft: 25,
    flexDirection: 'row',
    marginTop: 10,
  },
  countSection: {
    flexDirection: 'row',
    marginRight: 7,
    alignItems: 'baseline',
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
    flexWrap: 'wrap',
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
    fontSize: 30,
    textAlign: 'center',
    paddingVertical: 25,
    fontFamily: "GillSans-UltraBold",
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
     borderRadius: 5,
     height: 70,
     width: 70,
     margin: 50,
   },
   area_name: {
     color: '#3d8af7',
     fontWeight: 'bold'
   },
   zoneName: {
     fontWeight: 'bold',
     color: '#3d8af7',
     fontFamily: 'GillSans-UltraBold',
     letterSpacing: -3,
     fontSize: 15,
   },
   tabHeader: {
     textAlign: 'center',
     fontWeight: 'bold',
     color: '#3d8af7',
     fontFamily: 'GillSans-UltraBold',
     letterSpacing: -3,
     fontSize: 30,
   },
   postsFromTag: {
     marginVertical: 5,
     paddingHorizontal: 25,

   }
});

export default styles;
