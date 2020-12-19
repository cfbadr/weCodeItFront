import React from 'react'
import { Route } from 'react-router-dom'

const NewProject = () => {
	return (
		<div className="container-flex" style={{backgroundColor: '#F3F3F3', height: '100vh'}}>
			<div className="row">
				<div className="col-12 " style={styles.leftPart}>
					<div className="row d-flex justify-content-center">
						<div className="col-4">
							<input style={styles.input} placeholder="Nom de l'entrepise"></input>
						</div>
						<div className="col-4">
							<input style={styles.input} placeholder="dsds"></input>
						</div>
					</div>
					<div className="row d-flex justify-content-center mt-3 mb-3">
						<div className="col-4">
							<input style={styles.input} placeholder="dsds"></input>
						</div>
						<div className="col-4">
							<input style={styles.input} placeholder="dsds"></input>
						</div>
					</div>
					<div className="row d-flex justify-content-center">
						<div className="col-4">
							<input style={styles.input} placeholder="dsds"></input>
						</div>
						<div className="col-4">
							<input style={styles.input} placeholder="dsds"></input>
						</div>
					</div>
				</div>
			</div>
				<div className="row mt-5">
					<div className="col-12 mt-5">
					<Route render={({ history}) => (
							<div>
								<button style={styles.button} onClick={()=> history.push('/main')}>Sauvegarder</button>
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
export default NewProject