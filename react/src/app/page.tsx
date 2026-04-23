import { Row } from '@/components/ui/index';
import Welcome from '@/components/text/welcome';
import Login from '@/components/forms/login';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="home--page" className={styles.page}>
      <main id="home--main" className={styles.main}>
        <Row id="home--top-row">
          <Welcome className={styles.welcome} />
          <Login className={styles.login} />
	</Row>
      </main>
    </div>
  );
}
