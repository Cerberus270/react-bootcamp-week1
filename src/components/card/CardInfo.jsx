import React from 'react'

const CardInfo = ({ data }) => {
    return (
        <div className="overflow-hidden max-h-min rounded-lg shadow-lg bg-slate-100 mx-auto mb-5">
            <img className="w-3/6 mx-auto rounded-full mt-2" src={data.avatar_url} alt={data.login} />

            <div className="px-6 py-4">
                <div className="font-bold text-xl mb-2">
                    <p className='text-center'>
                        {data.name}
                    </p>
                    <p className='text-center text-slate-500 underline'>
                        @{data.login}
                    </p>
                    {data?.location ? <p className="text-center text-base py-1">📍 {data.location}</p> : null}
                    {data?.company ? <p className="text-center text-base py-1">🏙 {data.company}</p> : null}
                    <div className="flow-root mt-2">
                        <p className="float-left text-indigo-500">
                            Followers: {data.followers}
                        </p>

                        <p className="float-right text-indigo-500">
                            Following: {data.following}
                        </p>
                    </div>
                </div>
                <p className="text-gray-700 text-base text-center">
                    Bio: {data.bio}
                </p>
            </div>
            <div className='px-6 mb-3 mx-auto text-center'>
                <a className={"after:content-['_↗']"} href={data.html_url} target="_blank" rel='noreferrer'>
                    {/* <img src="../github-mark.png" alt="" width={25} height={25} /> */}
                    <span id="label" className='text-zinc-800 font-bold underline'>Go to GitHub Profile {' '}</span>
                    <img className='inline' src={'./github-mark.png'} height={"25"} width={"25"} alt="GitHub Logo" />

                </a>

            </div>
            {/* <div className="px-6 pt-4 pb-2">
                {data.stack.map((stack, i) => (
                    <span key={i} className="inline-block bg-gray-200 rounded-full px-3 py-1 text-sm font-semibold text-gray-700 mr-2 mb-2">#{stack}</span>
                ))}
            </div> */}
        </div>

    )
}

export default CardInfo