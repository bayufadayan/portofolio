import LogoReact from '../assets/react.svg';
export default function Loading() {
    return (
        <div className="bluryLoading">
            <div className="bluryOverlay">
                <div className="bluryContainer">
                    <img src={LogoReact} alt="Loading" className='logo react'/>
                    Fetching Data, Please Wait...
                </div>
            </div>
        </div>
    )
}
