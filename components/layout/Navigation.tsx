import React from 'react'
import { ToolbarProps, Toolbar, Button, Hidden, Box, Menu, MenuItem } from '@mui/material'
import HomeIcon from 'public/assets/vector-icons/home-icon.svg'
import DiscordIcon from 'public/assets/vector-icons/discord-icon.svg'
import TwitterIcon from 'public/assets/vector-icons/twitter-icon.svg'
import MediumIcon from 'public/assets/vector-icons/medium-icon.svg'
// import { attributes as navigation } from 'content/navigation.md'
import { WalletMultiButton } from '@solana/wallet-adapter-material-ui'
import { useAnchorElement } from 'hooks'

const Navigation: React.FC<ToolbarProps> = (props) => {
	const [menuAnchorEl, setMenuAnchorEl, resetMenuAnchorEl] = useAnchorElement()

	return (
		<Toolbar component='nav' className='navigation' {...props}>
			<Box className='navigation-items navigation-items--left'>
				<Button variant='contained' href='https://narentines.com' rel='noreferrer' target='_blank'>
					<HomeIcon />
				</Button>
			</Box>

			<Box className='navigation-items navigation-items--right'>
				{/* Mobile */}
				<Hidden smUp>
					<Button variant='contained' onClick={setMenuAnchorEl}>
						Social
					</Button>
					<Menu
						anchorEl={menuAnchorEl}
						open={Boolean(menuAnchorEl)}
						onClose={resetMenuAnchorEl}
						className='navigation-items navigation-items--right'
						PaperProps={{ className: 'mobile-menu' }}
						keepMounted
					>
						<MenuItem onClick={resetMenuAnchorEl}>
							<Button color='secondary' href='https://twitter.com/Narentines' rel='noreferrer' target='_blank'>
								<TwitterIcon />
								Twitter
							</Button>
						</MenuItem>
						<MenuItem onClick={resetMenuAnchorEl}>
							<Button color='secondary' href='https://discord.com/invite/narentines' rel='noreferrer' target='_blank'>
								<DiscordIcon />
								Discord
							</Button>
						</MenuItem>
						<MenuItem onClick={resetMenuAnchorEl}>
							<Button color='secondary' href='https://medium.com/@NarentinesNFT' rel='noreferrer' target='_blank'>
								<MediumIcon />
								Medium
							</Button>
						</MenuItem>
					</Menu>
				</Hidden>

				{/* Desktop */}
				<Hidden smDown>
					<Button
						variant='contained'
						aria-label='twitter'
						href='https://twitter.com/Narentines'
						rel='noreferrer'
						target='_blank'
					>
						<TwitterIcon />
					</Button>
					<Button
						variant='contained'
						aria-label='discord'
						href='https://discord.com/invite/narentines'
						rel='noreferrer'
						target='_blank'
					>
						<DiscordIcon />
					</Button>
					<Button
						variant='contained'
						aria-label='medium'
						href='https://medium.com/@NarentinesNFT'
						rel='noreferrer'
						target='_blank'
					>
						<MediumIcon />
					</Button>
				</Hidden>
				<WalletMultiButton className='wallet-button' />
			</Box>
		</Toolbar>
	)
}

export default Navigation
