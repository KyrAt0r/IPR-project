import {Avatar, List} from 'antd';
import {useState} from 'react';
import {IUser} from 'src/shared/types/user-interface.ts'

interface UserListProps {
	users: IUser[];
	onLoadMore: () => void;
}

const UserList = (props: UserListProps) => {
	const {users, onLoadMore} = props;
	const [loading, setLoading] = useState<boolean>(false);
	
	const handleLoadMore = () => {
		setLoading(true);
		onLoadMore();
	};
	
	return (
		<List
			itemLayout="horizontal"
			dataSource={users}
			renderItem={(user) => (
				<List.Item>
					<List.Item.Meta
						avatar={<Avatar src={user.avatar} />}
						title={user.name}
						description={user.email}
					/>
				</List.Item>
			)}
		>
			{users.length > 0 && (
				<div style={{ textAlign: 'center', marginTop: 16 }}>
					{!loading && (
						<button onClick={handleLoadMore}>Load More</button>
					)}
					{loading && <p>Loading...</p>}
				</div>
			)}
		</List>
	);
};

export default UserList;
