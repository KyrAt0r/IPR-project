import {AddUsers} from 'src/widgets/add-users/ui/add-users.tsx';
import {UsersList} from 'src/widgets/users-list/ui/users-list.tsx';
import './user-page.scss';


const UserPage = () => {
	return (
		<div className="user-page-cont">
			<AddUsers/>
			<UsersList/>
		</div>
	);
};

export default UserPage;
