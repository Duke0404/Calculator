const HistoryPane = ({
	history,
	setEquation,
	closeHistoryPanel,
	pushEmptyHistory
}: {
	history: string[]
	setEquation: (value: string) => void
	closeHistoryPanel: () => void
	pushEmptyHistory: () => void
}) => (
	<div className="flex flex-col bg-indigo-200 dark:bg-black dark:text-white w-full break-all grow py-4 px-4 rounded-3xl text-2xl overflow-scroll">
		{history.map((elem, index) => (
			<div
				key={index}
				className="px-1 py-4 rounded-3xl hover:bg-indigo-300 dark:hover:bg-indigo-700 cursor-pointer"
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
