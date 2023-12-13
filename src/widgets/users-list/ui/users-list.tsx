import {useEffect, useRef, useState} from 'react';
import axios from "axios";
import {Card, Input, List} from 'antd';

const { Search } = Input;

interface User {
	name: string;
	email: string;
	id: string;
}

export const UsersList = () => {
	const [users, setUsers] = useState<User[]>([]);
	const [filteredUsers, setFilteredUsers] = useState<User[]>([]);
	const observerRef = useRef<HTMLDivElement>(null);
	
	const fetchData = async () => {
		try {
			const response = await axios.get<User[]>('https://65777fa7197926adf62e6d2e.mockapi.io/user');
			setUsers(response.data);
			setFilteredUsers(response.data);
		} catch (error) {
			console.error('Error fetching data:', error);
		}
	};
	
	// const mutationCallback: MutationCallback = (mutationsList) => {
	// 	for (const mutation of mutationsList) {
	// 		if (mutation.type === 'childList' || mutation.type === 'subtree') {
	// 			console.log('User list changed');
	// 		}
	// 	}
	// };
	
	useEffect(() => {
		fetchData();
	}, []);
	
	// useEffect(() => {
	// 	const observer = new MutationObserver(mutationCallback);
	// 	if (observerRef.current) {
	// 		observer.observe(observerRef.current, { childList: true, subtree: true });
	// 	}
	//
	// 	return () => {
	// 		observer.disconnect();
	// 	};
	// }, []);
	
	const handleSearch = (value: string) => {
		const filtered = users.filter((user) =>
			user.name.toLowerCase().includes(value.toLowerCase())
		);
		setFilteredUsers(filtered);
	};
	
	const intersectionCallback: IntersectionObserverCallback = (entries) => {
		entries.forEach((entry) => {
			if (entry.isIntersecting) {
				console.log('Cursor entered element:', entry.target);
			}
		});
	};
	
	const intersectionObserver = new IntersectionObserver(intersectionCallback);
	
	return (
		<div style={{ width: 'auto', margin: 'auto', overflow: 'auto' }}>
			<h2>Лист с пользователями</h2>
			<Search placeholder="Search for a user" onSearch={handleSearch} style={{ marginBottom: 16 }} />
			<List
				dataSource={filteredUsers}
				renderItem={(user) => (
					<Card
						key={user.id}
						title={user.name}
						style={{ marginBottom: 16 }}
						ref={(el) => el && intersectionObserver.observe(el)}
					>
						<p>Email: {user.email}</p>
					</Card>
				)}
			/>
			<div ref={observerRef}>{/* Этот элемент будет использоваться для отслеживания изменений в списке пользователей */}</div>
		</div>
	);
};
