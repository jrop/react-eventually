import * as React from 'react'

function errToString(e) {
	if (typeof e == 'string') return e
	else return (e || {}).message
}

export type EventuallyProps = {
	loading?: any
	run?: any
	done?: any
	error?: any
}
export default class Eventually extends React.Component<EventuallyProps, any> {
	async componentDidMount() {
		try {
			const run = this.props.run || (() => Promise.resolve())
			this.setState({done: true, error: null, data: await run()})
		} catch (e) {
			this.setState({done: true, error: e, data: null})
		}
	}
	render() {
		const state = this.state || {}
		const {loading, done, error} = this.props

		const Loading = loading || (() => <span>Loading...</span>)
		const Done = done || (() => <span>Done</span>)
		const Error = error || (() => <span>{errToString(state.error)}</span>)

		if (!state.done) return <Loading />
		return !state.error
			? <Done {...state.data} />
			: <Error error={state.error} />
	}
}
