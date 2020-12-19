import React from 'react'
import { Route } from 'react-router-dom'

const SignIn = () => {
	return (
		<div className="container-flex" style={{backgroundColor: '#F3F3F3', height: '100vh'}}>
			<div className="row">
				<div className="col-8" style={styles.leftPart}>
					<h1 style={styles.title}>Let's work togethere</h1>
					<h2 style={styles.subtitle}>Register now</h2>
					<div className="mt-5 mb-5">
						<div className="row">
							<div className=" offset-2 col-4">
								<input placeholder="Last name" style={styles.input}></input>
							</div>
							<div className=" col-4">
								<input placeholder="Entreprise name" style={styles.input}></input>
							</div>
						</div>
						<div className="row mb-4 mt-4">
							<div className=" offset-2 col-4">
								<input placeholder="Name" style={styles.input}></input>
							</div>
							<div className="col-4">
								<input placeholder="Compagny adress" style={styles.input}></input>
							</div>
						</div>
						<div className="row">
							<div className=" offset-2 col-4">
								<input placeholder="Email" style={styles.input}></input>
							</div>
							<div className=" col-4">
								<input placeholder="SIRET" style={styles.input}></input>
							</div>
						</div>
						<Route render={({ history}) => (
							<div className="d-flex justify-content-center mt-5">
								<button style={styles.button} onClick={()=> history.push("/signin")}>Sign in</button>
							</div>
    					)}/>
						</div>
					</div>
				<div className="col-4" style={{backgroundColor: 'black', height: '100vh'}}>
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
		fontSize: 34 
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
		fontSize: 12,
		textTransform: 'uppercase'
	}
}
export default SignIn