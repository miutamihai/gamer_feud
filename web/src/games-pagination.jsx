import {Pagination} from 'flowbite-react'

export const GamesPagination = ({currentPage, setCurrentPage}) => {
    return <div className={'flex items-center justify-end'} style={{width: '90vw'}}>
        <Pagination
            currentPage={currentPage}
            onPageChange={setCurrentPage}
            showIcons={true}
            totalPages={100}
        />
    </div>
}