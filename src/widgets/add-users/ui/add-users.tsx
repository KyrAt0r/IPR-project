import {useState} from 'react';
import {Button, Input, List} from 'antd';

const { Search } = Input;

type UsersMap = Map<string, boolean>;

export const AddUsers = () => {
	const [users, setUsers] = useState<UsersMap>(new Map());
	const [username, setUsername] = useState<string>('');
	
	const addUser = () => {
		if (username.trim() !== '') {
			const newUsers = new Map(users);
			newUsers.set(username, true);
			setUsers(newUsers);
			setUsername('');
		}
	};
	
	const deleteUser = (user: string) => {
		const newUsers = new Map(users);
		newUsers.delete(user);
		setUsers(newUsers);
	};
	
	return (
		<div style={{ width: 'auto', margin: 'auto', overflow: 'auto' }}>
			<h2>Добавление пользователей</h2>
			<Search
				placeholder="Enter username"
				value={username}
				onChange={(e) => setUsername(e.target.value)}
				onSearch={addUser}
				enterButton="Add User"
			/>
			<List
				dataSource={Array.from(users.keys())}
				renderItem={(user) => (
					<List.Item>
						{user}
						<Button style={{ marginLeft: '10px' }} onClick={() => deleteUser(user)}>
							Delete
						</Button>
					</List.Item>
				)}
			/>
		</div>
	);
	
}
