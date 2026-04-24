import { Row } from "@/components/ui/index";
import styles from "./page.module.css";
import Stats from '@/components/dashboard/stats';

function Dashboard(props) {
  const temp = { requests: 0, friends: 0, posts: 0 };
  return (
    <div className={"page"}>
      <main className={"main"}>
        <h1 id="dashboard--title" className={"text-shadow-blue"}>Dashboard</h1>
        <Row id="top-row">
          <div id="mini-profile" className={styles.profile}>
           TODO: Mini Profile Section 
          </div>
          <div id="content" className={styles.content}>
            <div id="write-post">TODO: Write Post form</div>
            <div id="user-posts">TODO: User Posts List</div>
          </div>
          <Stats className={'stats'} stats={temp} />
        </Row>
      </main>
    </div>
  );
}

export default Dashboard;
