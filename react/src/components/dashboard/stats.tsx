type StatsProps = { 
  stats?: {
    requests: number; 
    friends: number;
    posts: number;
  }
}

function Stats(props: StatsProps) {
  const requests = props.stats.requests || 0;
  const friends = props.stats.friends || 0;
  const posts = props.stats.posts || 0;
  return (

    <div id="stats">
      <h3 id="stats--title" className="title">User Stats</h3>
      <p className="text">Requests: <span className="count">{requests}</span></p>
      <p className="text">Friends: <span className="count">{friends}</span></p>
      <p className="text">Posts: <span className="count">{posts}</span></p>
    </div>
  );
}

export default Stats;
