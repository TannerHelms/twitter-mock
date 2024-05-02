export default function SidebarMenuIcon({ text, Icon, active }) {
    return (
        <div className="hoverEffect flex items-center text-gray-700 justify-center md:justify-start text-lg gap-3">
            <Icon size="20px" />
            <span className={`${active && 'font-bold'} hidden md:inline`}>{text}</span>
        </div>
    )
}