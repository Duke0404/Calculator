const HistoryPane = ({
	history,
	setEquation,
	closeHistoryPanel,
	pushEmptyHistory
}: {
	history: string[]
	setEquation: (value: string) => void
	closeHistoryPanel: () => void,
	pushEmptyHistory: () => void
}) => (
	<div className="absolute flex flex-col mt-14 w-full border-solid border-white dark:text-white bg-slate-100 dark:bg-zinc-900">
		{history.map((elem, index) => (
			<div
				key={index}
				className="px-1 py-4"
				onClick={() => {
					setEquation(elem)
					pushEmptyHistory()
					closeHistoryPanel()
				}}
			>
				{elem}
			</div>
		))}
	</div>
)

export default HistoryPane
