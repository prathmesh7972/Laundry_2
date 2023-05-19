import React from 'react'

const Contact = () => {
    return (
        <div className='contact'>
            <main>
                <h1>contact us</h1>
                <form action="">
                    <div>
                        <label htmlFor="">name</label>
                        <input type="text" required placeholder='abc' />
                    </div>
                    <div>
                        <label>Email</label>
                        <input type="email" required placeholder="Abc@xyz.com" />
                    </div>
                    <div>
                        <label>Message</label>
                        <input
                            type="text" 
                            required
                            placeholder="Tell us about your query..."
                        />
                    </div>
                    <button type="submit">send</button>
                </form>

            </main>
        </div>
    )
}

export default Contact