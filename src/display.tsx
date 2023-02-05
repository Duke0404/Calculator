const Display = ({ value }: { value: string }) => (
	<div className="bg-indigo-200 dark:bg-black dark:text-white text-7xl w-full grow py-5 px-6 rounded-3xl">{value ? value : "0"}</div>
)

export default Display
