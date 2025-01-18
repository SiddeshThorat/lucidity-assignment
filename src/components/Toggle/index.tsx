const Toggle = ({ checked }: { checked: boolean } ) => {
  return (
    <div className="relative inline-block w-11 h-5">
      <input checked={checked} id="switch-component" type="checkbox" className="peer appearance-none w-11 h-4 bg-slate-100 rounded-full checked:bg-green-600 cursor-pointer transition-colors duration-300" />
      <label className="absolute top-0 left-0 w-5 h-5 bg-white rounded-full border border-slate-300 shadow-sm transition-transform duration-300 peer-checked:translate-x-6 peer-checked:border-slate-800 cursor-pointer">
      </label>
    </div>
  )
}

export default Toggle