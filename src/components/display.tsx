const Display = ({ value, lastEq }: { value: string; lastEq: string }) => (
	<div className="flex flex-col bg-indigo-200 dark:bg-black w-full break-all overflow-hidden grow py-5 px-6 rounded-3xl">
		{lastEq && <span className="text-zinc-700 dark:text-zinc-300 px-1.5">{lastEq}</span>}
		<span className="dark:text-white text-7xl">{value ? value : "0"}</span>
	</div>
)

export default Display
