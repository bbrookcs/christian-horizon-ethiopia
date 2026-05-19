<section class="write-section">
    <div class="container">
        <div class="content">
            <h1>Write us a message</h1>
            <p>
                Have a question, partnership idea, or want to support our work? Fill out the form below and a member of our team will get back to you within 1–2 business days.
            </p>
            <div class="form">
                <input type="text" placeholder="Full name" />
                <input type="email" placeholder="Your email address" />
                <textarea placeholder="Message" rows="6"></textarea>
                <button class="send-btn">Send a message</button>
            </div>
        </div>
        <div class="image-stack">
            <img src="/img5.jpg" alt="Community Support" class="stack-img" />
            <img src="/img6.jpg" alt="Children Activities" class="stack-img" />
            <img src="/img7.jpg" alt="Support Programs" class="stack-img" />
            <img src="/img8.jpg" alt="Education Impact" class="stack-img" />
        </div>
    </div>
</section>

<style>
    .write-section {
        background-color: #1E40AF;
        padding: 6rem 2rem;
        color: white;
        min-height: 100vh;
    }

    .container {
        max-width: 1200px;
        margin: 0 auto;
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 4rem;
        align-items: center;
    }

    h1 {
        font-size: 2.5rem;
        margin-bottom: 1.5rem;
    }

    p {
        opacity: 0.9;
        line-height: 1.6;
        margin-bottom: 2rem;
    }

    .form {
        display: flex;
        flex-direction: column;
        gap: 1rem;
    }

    input, textarea {
        padding: 1rem;
        border-radius: 8px;
        border: none;
        font-size: 1rem;
        width: 100%;
    }

    .send-btn {
        background: #FFB800;
        color: black;
        padding: 1rem 2rem;
        border: none;
        border-radius: 8px;
        font-weight: 500;
        cursor: pointer;
        width: fit-content;
    }

    .send-btn:hover {
        background: #FFA600;
    }

    .image-stack {
        position: relative;
        width: 100%;
        height: 500px;
    }

    .stack-img {
        position: absolute;
        width: 250px;
        height: 250px;
        object-fit: cover;
        border-radius: 12px;
        border: 4px solid white;
        box-shadow: 0 4px 12px rgba(0, 0, 0, 0.2);
        box-sizing: border-box;
    }

    .stack-img:nth-child(1) {
        top: 0;
        right: 50%;
        transform: rotate(-12deg);
        z-index: 4;
    }

    .stack-img:nth-child(2) {
        top: 0;
        left: 50%;
        transform: rotate(8deg);
        z-index: 3;
    }

    .stack-img:nth-child(3) {
        bottom: 0;
        right: 50%;
        transform: rotate(-5deg);
        z-index: 2;
    }

    .stack-img:nth-child(4) {
        bottom: 0;
        left: 50%;
        transform: rotate(15deg);
        z-index: 1;
    }

    @media (max-width: 768px) {
        .container {
            grid-template-columns: 1fr;
            gap: 2rem;
        }

        .image-stack {
            height: 300px;
        }

        .stack-img {
            width: 150px;
            height: 150px;
        }
    }
</style> 