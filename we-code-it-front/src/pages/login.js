import React from 'react'
import { Route } from 'react-router-dom'


const LogIn = () => {
	return (
		<div className="container-flex" style={{backgroundColor: 'black', height: '100vh'}}>
			<div className="row">
				<div className="col-8" style={styles.leftPart}>
					<h1 className="text-light" style={styles.title}>An idea ?</h1>
					<h2 className="text-light" style={styles.subtitle}>We code it.</h2>
				</div>
				<div className="col-4" style={{backgroundColor: '#F3F3F3', height: '100vh'}}>
					<div>
						<button style={{color: '#AEAEAE'}}>EN</button>
					</div>
					<div style={styles.rightPart}>
						<div className="d-flex justify-content-center">
							<p>Log in to access to your personal space.</p>
						</div>
						<div className="d-flex justify-content-center mt-4">
							<input placeholder="Email" style={styles.input}></input>
						</div>
						<div className="d-flex justify-content-center mt-3 mb-5">
							<input placeholder="Password" type="password" style={styles.input}></input>
						</div>
						<Route render={({ history}) => (
							<div>
								<div className="d-flex justify-content-center">
								<button style={styles.button}  onClick={()=> history.push("/main")}>Log in 2</button>
							</div>
							<div className="d-flex justify-content-center">
								<button style={styles.button} onClick={()=> history.push("/signin")}>Sign in</button>
							</div>
							</div>
    					)}/>
					</div>
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
		fontSize: 160 
	},
	subtitle: {
		fontFamily: 'Raleway',
		fontSize: 92 
	},
	input: {
		width: '70%',
		boxShadow: `1px 3px 1px rgba(0, 4, 4, 0.25)`,
		paddingVertical: 8,
		paddingLeft: 8,
		borderWidth: 0,
	},
	button: {
		borderWidth: 0,
		backgroundColor: `rgba(0, 0, 0, 0)`,
		fontSize: 12,
		textTransform: 'uppercase'
	}
}
export default LogIn