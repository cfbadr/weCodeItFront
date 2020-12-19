import React from 'react'
import { Route } from 'react-router-dom'

const Main = () => {
	return (
		<div className="container-flex" style={{backgroundColor: '#F3F3F3', height: '100vh'}}>
			<div className="row">
				<div className="col-11 text-right">
					<p>Welcome back User <button style={styles.button}><i class="fas fa-sign-out-alt"></i></button></p>
				</div>
			</div>
			<div className="row">
				<div className="col-12 d-flex justify-content-center" style={styles.leftPart}>
					<div className="col-6 " style={styles.leftPart}>
						<h1 style={styles.title}>LOOKS LIKE YOU HAVE NO PROJECT SET. YET.</h1>
					</div>
				</div>
			</div>
				<div className="row">
					<div className="col-12">
					<Route render={({ history}) => (
							<div>
								<button style={styles.button} onClick={()=> history.push('/newproject')}>Start</button>
							</div>
    					)}/>
					</div>
				</div>
		</div>
	)
}

const styles = {
	leftPart: {
		paddingTop: '10%',
	},
	rightPart: {
		paddingTop: '50%',
	},
	title: {
		fontFamily: 'Raleway',
		fontSize: 64,
		fontWeight: 400,
	},
	subtitle: {
		fontFamily: 'Raleway',
		fontSize: 34 
	},
	input: {
		width: '100%',
		height: 32,
		boxShadow: `1px 3px 1px rgba(0, 4, 4, 0.25)`,
		paddingVertical: 8,
		paddingLeft: 8,
		borderWidth: 0,
	},
	button: {
		borderWidth: 0,
		backgroundColor: `rgba(0, 0, 0, 0)`,
		fontSize: 24,
		textTransform: 'uppercase',
		fontWeight: 800,

	}
}
export default Main