import style from '../BlogPage.module.css';

export function BlogNotes() {
    return (
        <div className={style.blog_notes}>
            <hr />
            <h3>Older posts</h3>
            <p>see the <span><a target='_blank' href="https://legacy.reactjs.org/blog/all.html/">older posts.</a></span></p>
        </div>
    )
}