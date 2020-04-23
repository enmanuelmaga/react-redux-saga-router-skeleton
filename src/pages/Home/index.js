import React, { useState } from 'react';

import {
	Container,
	Typography,
	Card,
	Grid,
	TextField,
	Button,
} from '@material-ui/core';
import styles from './style';
import { MovieIcon } from '../../icons';

export default ({ history }) => {
	const [searchText, setSearchText] = useState('');
	const classes = styles();

	const handleSearchText = (event) => {
		setSearchText(event.target.value);
	};

	const handleClean = (event) => {
		setSearchText('');
	};

	const handleSearch = (event) => {
		history.push(`/results?movieName=${searchText}`);
	};

	return (
		<Container className={classes.container}>
			<Card className={classes.cardContainer}>
				<Grid container>
					<Grid className={classes.titleGridContainer}>
						<Typography className={classes.title}>Bienvenido</Typography>
					</Grid>
					<Grid>
						<MovieIcon className={classes.MovieIcons}></MovieIcon>
					</Grid>
				</Grid>
				<TextField
					value={searchText}
					placeholder='Buscar...'
					onChange={handleSearchText}
					className={classes.textFieldSearch}
				/>
				<Grid container className={classes.buttonsContainer}>
					<Button variant='outlined' color='secondary' onClick={handleClean}>
						Limpiar
					</Button>
					<Button
						variant='contained'
						color='primary'
						size='large'
						onClick={handleSearch}
						className={classes.searchButton}
					>
						Buscar
					</Button>
				</Grid>
			</Card>
		</Container>
	);
};
