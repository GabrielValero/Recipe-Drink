import Drawer from '@material-ui/core/Drawer';
import List from '@material-ui/core/List';
import ListItem from '@material-ui/core/ListItem';
import ListItemIcon from '@material-ui/core/ListItemIcon';
import ListItemText from '@material-ui/core/ListItemText';
import {makeStyles} from '@material-ui/core/styles'

import HomeIcon from '@material-ui/icons/Home';
import SearchIcon from '@material-ui/icons/Search';
import PersonIcon from '@material-ui/icons/Person';

const useStyle = makeStyles({
	drawer: {
		width: 240
	}
})

export default function DrawerToggle({open, onClose}){
	const style = useStyle();

	return(
		<Drawer variant="temporary" anchor="left" open={open} onClose={onClose ? onClose: null} classes={{paper: style.drawer}}>
			<List>
				<ListItem button>
					<ListItemIcon>
						<HomeIcon/>
					</ListItemIcon>
					<ListItemText primary="Inicio"/>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<PersonIcon/>
					</ListItemIcon>
					<ListItemText primary="User"/>
				</ListItem>
				<ListItem button>
					<ListItemIcon>
						<SearchIcon/>
					</ListItemIcon>
					<ListItemText primary="Buscar"/>
				</ListItem>
			</List>
		</Drawer>
	)
}