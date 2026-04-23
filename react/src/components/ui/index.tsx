

function Row (props) {
  return (<div id={props.id || ""} className="row">{props.children}</div>)
}

function Col (props) {
  return (<div id={props.id || ""} className="column">{props.children}</div>)
}

function Card(props) {
  return (<div id={props.id || ""} className="card">{props.children}</div>)
}

function Text(props) {
  return (<p id={props.id || ""} className="text">{props.children}</p>)
}

function List(props) {
  return (<ul id={props.id || ""} className="list">{props.children}</ul>)
}

function Inline(props) {
  return (<ul id={props.id || ""} className="list inline">{props.children}</ul>)
}

function Item(props) {
  return (<li id={props.id || ""} className="item">{props.children}</li>)
}

function Container (props) {
  return (<div id={props.id || ""} className="container">{props.children}</div>)
}

function Grid (props) {
  return (<div id={props.id || ""} className="grid">{props.children}</div>)
}

function Link (props) {
  return (<a id={props.id || ""} href={props.href || "#"} className="link">{props.children}</a>)
}

export {
  Row, Col, Text, Card, List, Inline, Item, Container, Grid, Link

}
