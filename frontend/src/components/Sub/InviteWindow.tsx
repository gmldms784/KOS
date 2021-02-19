import React, {
	Dispatch, createContext, useState, useContext, useEffect
} from 'react';
import clsx from 'clsx';

import {
	TextField, Grid, Avatar, Paper
} from '@material-ui/core';

import { UserObj } from '../Model';
import { Window, WindowHeader, Button } from '../Shared';
import { returnIcon } from '../../function/Icon';

const inviteOpenContext = createContext<number>(-1);
const inviteDispatchContext = createContext<Dispatch<number>>(() => {});

type childrenObj = {
	children: React.ReactNode;
}

export const InviteWindow = ({ children } : childrenObj) => {
	// window를 따로 컴포넌트로 만든 이유
	// subMenu에서만 쓰이는 것이 아니라 projectHead 컴포넌트에서도 써야하는데
	// 최상위로 올릴만 한 window는 아님

	// 초대할 프로젝트의 id도 받아야하기 때문에, pid가 0보다 크면 window가 열리도록 설정
	const [pid, setPID] = useState<number>(-1);
	const [open, setOpen] = useState<boolean>(false);
	const [search, setSearch] = useState<string>('');
	const [result, setResult] = useState<Array<UserObj>>([]);
	// todo : user.go에서 id를 주면 result로 user 정보 받아오는 api 추가 => 현재 기존 api가 token으로 바뀌어있음

	useEffect(() => {
		if (pid < 0) {
			setOpen(false);
		} else {
			setOpen(true);
		}
	}, [pid]);

	const searchIdEmail = () => {
		console.log(`${search}검색`);
		setResult([{
			ID: 12314,
			Name: 'wooheejin',
			Icon: 'pet',
			GitID: 'sdjksfjl@gmail.com'
		}, {
			ID: 12314,
			Name: 'wooheejin',
			Icon: 'apple',
			GitID: 'sdjksfjl@gmail.com'
		}, {
			ID: 12314,
			Name: 'wooheejin',
			Icon: 'audio',
			GitID: 'sdjksfjl@gmail.com'
		}]);
	};

	return (
		<>
			<inviteOpenContext.Provider value={pid}>
				<inviteDispatchContext.Provider value={setPID}>
					{children}
				</inviteDispatchContext.Provider>
			</inviteOpenContext.Provider>
			<Window
				type="project-backup-con"
				open={open}
				hasCloseBtn={true}
				handleWindowClose={() => setOpen(false)}
			>
				<WindowHeader
					mainTitle="Invite Member"
					subTitle="프로젝트에 멤버를 초대해보세요."
				/>
				<Grid className="search-input-con">
					<TextField
						label="초대할 사람의 ID나 EMAIL을 검색해보세요."
						InputLabelProps={{
							shrink: true,
						}}
						variant="outlined"
						className="search-input"
						autoFocus={true}
						value={search}
						onChange={(e) => setSearch(e.target.value)}
					/>
					<Button
						classList={[]}
						value="검색하기"
						onClickFun={searchIdEmail}
					/>
				</Grid>
				<Grid className="search-result-con">
					{
						result.length !== 0 &&
						result.map((user) => {
							const a = 1;
							return (
								<Paper className="member-paper" elevation={3} key={user.ID}>
									<Avatar className={clsx('member', user.Icon)}>
										{returnIcon(user.Icon)}
									</Avatar>
									<Grid className="name">
										{user.Name}
									</Grid>
									<Button
										classList={[]}
										value="초대하기"
									/>
								</Paper>
							);
						})
					}
				</Grid>
			</Window>
		</>
	);
};
export function useInviteState() {
	const context = useContext(inviteOpenContext);
	return context;
}

export function useInviteDispatch() {
	const context = useContext(inviteDispatchContext);
	return context;
}

export default InviteWindow;
