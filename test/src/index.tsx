import * as React from 'react'
import * as ReactDOM from 'react-dom'

import Eventually from '../../src/index'

ReactDOM.render(
	<div>
		<Eventually run={() => new Promise(y => setTimeout(y, 1000))} /><br />
		<Eventually
			run={() =>
				new Promise((y, n) =>
					setTimeout(() => n(new Error('An error occurred')), 1500)
				)}
		/>
	</div>,
	document.getElementById('root')
)
