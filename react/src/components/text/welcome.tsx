
function Welcome(props: { className?: string}) {
  return (
    <div id="welcome" className={props.className || "welcome"}>
      <h1  id="welcome--text" className={"text"}>Welcome to JSX Book!</h1>
    </div>
  )
}

export default Welcome;
