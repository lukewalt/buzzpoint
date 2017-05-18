

















axios.get(`http://localhost:3000/api/tags/${this.state.tagName}`)

<View>
  { tags.posts.map( posts => {
    let postZone = null
    if (posts.zone === 1) {
      postZone = "North"
    } else if (posts.zone === 2) {
      postZone = "East"
    } else if (posts.zone === 3) {
      postZone = "South"
    } else {
      postZone = "West"
    }
    return (
      <View style={styles.post}>
      <View style={styles.innerPost}>
      <View style={{marginRight: 10}}>
      <Image
      style={styles.thumbPost}
      source={posts.positive ? require('../img/tu.png') : require('../img/td.png')}
      />
      <Text style={{fontWeight: 'bold', color: '#3d8af7'}}> {postZone.toUpperCase()}</Text>
      </View>
      <Text style={styles.postTitle}>{posts.comment}</Text>
      <View>
      <Image style={styles.postImg} source={{uri: 'https://cdn.pixabay.com/photo/2013/10/21/04/51/color-198892_640.jpg'}}/>
      </View>
      </View>
      </View>
    )

  })

  }
</View>
