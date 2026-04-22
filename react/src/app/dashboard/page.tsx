import styles from "./page.module.css";
import Stats from '@/components/dashboard/stats';
function Dashboard(props) {
  const temp = { requests: 0, friends: 0, posts: 0 };
  return (
    <div className={styles.page}>
      <main className={styles.main}>
        <h1>Dashboard</h1>
        <div id="top-row" className="row">
          <div id="mini-profile" className={styles.profile}>
           TODO: Mini Profile Section 
          </div>
          <div id="content" className={styles.content}>
            <div id="write-post">TODO: Write Post form</div>
            <div id="user-posts">TODO: User Posts List</div>
          </div>
          <Stats className={'stats'} stats={temp} />
        </div>

      </main>
    </div>
  );
}

export default Dashboard;
