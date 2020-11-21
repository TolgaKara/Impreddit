export default {
  async getPosts(subreddit){
    const url = `https://www.reddit.com/r/${subreddit}.json`
    const response = await fetch(url)
    return response.json();
  }
}
