import Toggle from "../Toggle"

const Header = ({ isAdmin, handleToggle }: { isAdmin: boolean, handleToggle: () => void}) => (
  <div className="flex justify-end items-center w-full h-[7vh]">
    <div className="flex gap-2.5">
      <div className="flex items-center gap-2.5 pr-4">
        <span>admin</span>
        <span onClick={handleToggle}><Toggle checked={!isAdmin} /></span>
        <span>user</span>
      </div>
      <div className="border-l border-white pl-5">
        <img src='/assets/images.png' height={20} width={20} />
      </div>
    </div>
  </div>
)

export default Header