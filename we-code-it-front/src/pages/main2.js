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
			<div className="" style={styles.leftPart}>
				<div className="row" >
					<div className="col-6 offset-1">
						<h1 style={styles.title}>Project name</h1>
					</div>
				</div>
				<div className="row d-flex justify-content-center" >
					<div className="col-8" style={styles.containerSection}>
						<div className="row mt-5 mb-1">
							<button className="col-3" style={styles.sections}>
								<img src={'./images/icoGithub.png'} alt=""/>
							</button>
							<button className="col-3" style={styles.sections}>
								<img src={'./images/icoWebsite.png'} alt=""/>
							</button>
							<button className="col-3" style={styles.sections}>
								<img src={'./images/icoTrello.png'} alt=""/>
							</button>
						</div>
						<div className="row mb-5">
							<button className="col-3" style={styles.sections}>
								<img src={'./images/icoChat.png'} alt=""/>
							</button>
							<button className="col-3" style={styles.sections}>
								<img src={'./images/icoUpload.png'} alt=""/>
							</button>
							<button className="col-3" style={styles.sections}>
								<img src={'./images/icoBill.png'} alt=""/>
							</button>
						</div>

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
	title: {
		fontFamily: 'Raleway',
		fontSize: 24,
		fontWeight: 700,
		textAlign: 'left'
	},
	sections: {
		borderWidth: 1,
		borderStyle: 'solid',
		maxHeight: 150,
		borderColor: `rgba(0, 0, 0, 0.1)`,
		backgroundColor: `rgba(0, 0, 0, 0)`,
		margin: 10,
		height: 150,
	},
	button: {
		backgroundColor: `rgba(0, 0, 0, 0)`,
		borderWidth: 0,
		fontSize: 24,
		textTransform: 'uppercase',
		fontWeight: 800,

	}
}
export default Main