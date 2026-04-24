import { Row } from '@/components/ui/index';
import Welcome from '@/components/text/welcome';
import Login from '@/components/forms/login';
import styles from "./page.module.css";

export default function Home() {
  return (
    <div id="home--page" className={"page"}>
      <main id="home--main" className={"main"}>
        <Row id="home--top-row">
          <Welcome className={"text-shadow-blue"} />
          <Login className={"login"} />
      	</Row>
      </main>
    </div>
  );
}
