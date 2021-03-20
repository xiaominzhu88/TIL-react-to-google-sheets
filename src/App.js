import styles from './App.module.scss';
import FormField from './component/FormField';
import { Separator } from 'reakit';

function App() {
	return (
		<>
			<div className={styles.app}>
				<header className={styles.header}>
					<p>React to Google Sheets</p>
				</header>
				<Separator orientation="horizontal" />
				<FormField />
			</div>
		</>
	);
}

export default App;
