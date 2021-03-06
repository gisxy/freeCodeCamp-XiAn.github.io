import * as React from 'react'
import Config from '@config/index'
import './index.less'
import Content from '@components/Content'

const IndexContent = ({ isPhone }) => (
	<div className='content'>
		{Config.contents.map((content, index) => {
			if (isPhone) {
				return <Content key={Math.random()} isPhone={isPhone} project={content.project} name={content.name} index={index} description={content.description} style={{ flexDirection: 'column' }} />
			} else {
				return <Content key={Math.random()} isPhone={isPhone} project={content.project} name={content.name} index={index} description={content.description} style={{ flexDirection: (content.isImgLeft ? 'row' : 'row-reverse') }} isImgLeft={content.isImgLeft} />
			}
		})}
	</div>
)

export default IndexContent
