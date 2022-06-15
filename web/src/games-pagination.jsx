import {Pagination} from 'flowbite-react'

export const GamesPagination = ({currentPage, setCurrentPage, totalPages}) => <div
    className={'flex items-center justify-end'} style={{width: '90vw'}}>
    <Pagination
        currentPage={currentPage}
        onPageChange={setCurrentPage}
        showIcons={true}
        totalPages={totalPages}
    />
</div>