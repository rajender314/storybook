import React, { useState, useCallback } from 'react'
import {
  //PiServerGrid,
  PiButton,
  PiInput,
  PiSelect,
  PiUploader,
  PiDatePicker,
  PiModal,
  PiModalHeader,
  PiModalTitle,
  PiTypography,
  PiTabGroup,
  PiTabHeaderPanel,
  PiTabHeader,
  PiTabPanel,
  PiHeaderMenu,
  PiAttachmentList,
  //PiLeftMenu,
  PiPagination,
  PiFileUploader,
  PiTextArea,
  //PiServerGrid2,
  PiBreadCrumb,
  PiIconDropdownMenu,
  PiDropdownMenu,
  PiAddress,
  PiSearch,
  PiPermissionsList,
  PiConfirmModel,
  PiLabelName
  //PiDateRangePicker,
  // PiIconDropdownMenu,
  // PiActionIcon
} from 'pixel-kit'
//import { AgGridReact } from 'ag-grid-react'
import 'ag-grid-enterprise'
import 'ag-grid-community/dist/styles/ag-grid.css'
import 'ag-grid-community/dist/styles/ag-theme-alpine.css'

// import { PiAvatar } from 'pixel-kit'
// import 'pixel-kit/dist/index.css'
// import {PiProductCard} from 'pixel-kit'
// import {PiAddress} from 'pixel-kit'
// import {PiDropdownMenu} from 'pixel-kit'
// import {PiFilters} from 'pixel-kit'
// import {PiAccordian, PiAccordianItem, PiAccordianHeader, PiAccordianPanel} from 'pixel-kit'
// const page = 1
//const baeurl = 'https://www.ag-grid.com/example-assets/olympic-winners.json'

const App = () => {
  // let [page, setPage] = useState(1)
  //let [test, setTest] = useState('')
  //const columns = [{
  //  field:'athlete'
  //}, {
  //  field:'age'
  //}]

  //const serverFilterData = {
  //  contact_type: [
  //    { id: '6b4ef73f-5d6e-4b3a-9003-e7af45dafd70', name: 'Test COntact TYp' },
  //    {
  //      id: '994532b2-b5c9-4faf-af06-ad45eef368ec',
  //      name: 'Sales Representative'
  //    },
  //    { id: '3c3ea22c-9418-4df1-9161-4db652b53cf6', name: 'Patch Update' }
  //  ]
  //}
  // let [cellValueData, setCellValueData]: any = useState({
  //   body: {},
  //   method: 'GET',
  //   headers: {},
  //   // url: ' https://buzzworlddev-iidm.enterpi.com:8446/v1/Contacts?page=1'
  //   url: `${baeurl}`,
  //   test: 1
  // })

  //let cellValueData = {
  //  body: {},
  //  method: 'GET',
  //  page: 1,
  //  headers: {},
  //  // url: ' https://buzzworlddev-iidm.enterpi.com:8446/v1/Contacts?page=1'
  //  url: `${baeurl}`
  //}

  function deleteImage(e: any) {
    console.log(e)
  }

  function onChangeEndDate(e: any) {
    console.log(e)
  }
  //let [gridApi, setGridApi]: any = useState({})
  //let [columnsApi, setColumnApi]: any = useState({})
  //const onGridReady = (params: any) => {

  //  gridApi = params.api
  //  setGridApi(gridApi)
  //  columnsApi = params.columnApi
  //  setColumnApi(columnsApi)
  //  params.api.hideOverlay()
  //   if(gridApi) {
  //    gridApi.purgeServerSideCache()

  //  }
  //}

  const onDrop = useCallback((acceptedFiles: any) => {
    console.log(acceptedFiles)
    acceptedFiles.forEach((file: any) => {
      const reader = new FileReader()

      reader.onabort = () => console.log('file reading was aborted')
      reader.onerror = () => console.log('file reading has failed')
      reader.onload = () => {
        // Do whatever you want with the file contents
        const binaryStr = reader.result
        console.log(binaryStr)
      }
      reader.readAsArrayBuffer(file)
    })
  }, [])

  //function cellClicked() {
  //  test = '1111'
  //  setTest(test)
  //  console.log(test)
  //}
  //function gridready() {
  //  test = '1111'
  //  setTest(test)
  //  console.log(test)
  //}

  // const billing: any = {
  //   address1: '123',
  //   address2: '12345',
  //   city: 'Hyderabad',
  //   street: 'steet name',
  //   state: 'Telangana',
  //   country: 'India',
  //   zip: 500062
  // }
  // return <PiAvatar appearance="circle" src="https://hello.atlassian.net/secure/projectavatar?pid=30630"/>

  const [tabIndex, setTabIndex] = useState(0)
  function tabChange(indx: number) {
    setTabIndex(indx)
  }

  const primaryHeaderOptions = [
    //{
    //  key: "/dashboard",
    //  label: "Dashboard"
    //},
    //{
    //  children: [
    //    {
    //      key: "/create",
    //      label: "Create"
    //    },
    //    {
    //      key: "/edit",
    //      label: "Edit"
    //    }
    //  ],
    //  key: "/quotes",
    //  label: "Quotes"
    //},
    //{
    //  key: "/repairs",
    //  label: "Repairs"
    //},
    //{
    //  key: "/orders",
    //  label: "Orders"
    //},
    //{
    //  key: "/invoices",
    //  label: "Invoices"
    //},
    {
      key: 'organisations',
      label: 'Organizations',
      display: false,
      children: [
        {
          key: 'organisations',
          label: 'Organizations',
          display: false
        },
        {
          key: 'contacts',
          label: 'Contacts',
          display: true
        }
      ]
    },
    {
      key: 'account-type',
      label: 'Admin',
      display: true
    },
    {
      key: 'pricing',
      label: 'Pricing',
      display: true,
      children: [
        {
          key: 'pricing',
          label: 'Pricing',
          display: true
        },
        {
          key: 'discount-codes',
          label: 'Discount Codes',
          display: false
        },
        {
          key: 'special-pricing',
          label: 'Special Pricing',
          display: true
        }
      ]
    },
    {
      key: 'repairs',
      label: 'Repairs',
      display: false
    }
  ]

  const handleInputChange = (newValue: string) => {
    console.log(newValue)
    return newValue

    //}, 1000)
  }
  const onSelectChange = (e: any, action: any) => {
    console.log(e)
    console.log(action)
  }
  const [value, setValue] = useState('')
  return (
    <>
      <div className='form-styles'></div>

      <PiDropdownMenu
        items={[
          {
            id: 1,
            name: 'Test1'
            //display: true
          },
          {
            id: 2,
            name: 'Test2'
          }
        ]}
        label='Page Trigger'
        onOpenChange={function noRefCheck() {}}
      />

      <PiInput
        name='stock_code'
        label='Stock Code'
        libraryType='atalskit'
        type='text'
        placeholder='Stock Code'
        // maxLength={2}
        value={value}
        onChange={(e: any) => {setValue(e.target.value.toUpperCase())}}
        onBlur={(e: any) => {setValue(e.target.value.trim())}}
      />
      <PiTextArea name='wew' label={'3233'} maxLength={1} />
      <PiSelect
        helpText='Help Text under the select'
        label='Select Label'
        libraryType='atalskit'
        name='select'
        onChange={(e: any, actionMeta: any) => onSelectChange(e, actionMeta)}
        isClearable={true}
        options={[
          {
            label: 'One',
            value: '1'
          },
          {
            label: 'Two',
            value: '2'
          }
        ]}
        placeholder='select...'
        menuIsOpen={true}
        onInputChange={handleInputChange}
        isMulti
      />

      <PiUploader
        dropzoneProps={{
          accept: 'image/*',
          disabled: false,
          maxSize: 94371840,
          multiple: true,
          noDrag: false,
          text: `Drag & Drop Discount file anywhere here`,
          className: 'repair-upload2'
        }}
        onUpload={onDrop}
        className='repair-upload'
      />
      <PiLabelName 
      label='2323'
      description='Raj'
      isCopyIcon
      />
       <PiLabelName 
      label='qwqwqwqw'
      description='232323232'
      isCopyIcon
      />

      <PiFileUploader
        dropzoneProps={{
          accept: 'image/*',
          disabled: false,
          maxFileSizeErroMessage: 'Max file uplode size should be 5MB',
          maxSize: 5242880,
          multiple: true,
          noDrag: false,
          text: 'Click here or drag a file to upload!',
          validFieErrorMessage: 'Upload valid file type'
        }}
        onUpload={function noRefCheck() {}}
      />
       <PiConfirmModel
        className={'show'}
        headerLabel={'Confirmation'}
        message={'wewe'}
        primaryBtnLabel={'Accept'}
        secondaryBtnLabel="Decline"
        onClose={() => {
          
        }}
       
      />
      <PiSearch
        libraryType='atalskit'
        onClear={function noRefCheck() {}}
        onKeyUp={function noRefCheck() {}}
        onValueChange={function noRefCheck() {}}
        value='22'
        className='qqqq'
      />
      <PiDatePicker
        // helpText=""
        // label="End Date"
        libraryType='atalskit'
        name='end_date'
        onChange={onChangeEndDate}
        // onKeyDown={function noRefCheck() { }}
        placeholder='MM/DD/YYYY'
      />

      <>
        <PiButton
          appearance='secondary'
          label='Helldsfffffffffff dsfdsfdsfo'
          onClick={function noRefCheck() {}}
        />
        <PiModal isOpen={false} width='auto' onClose={function noRefCheck() {}}>
          <PiModalHeader>
            <PiModalTitle appearance='danger'>
              <PiTypography component='h4'>Pixel-kit</PiTypography>
            </PiModalTitle>
          </PiModalHeader>
        </PiModal>

        <PiTabGroup id='tab' onChange={tabChange} selected={tabIndex}>
          <PiTabHeaderPanel>
            <PiTabHeader>Welcome-1</PiTabHeader>
            <PiTabHeader>Welcome-2</PiTabHeader>
            <PiTabHeader>Welcome-3</PiTabHeader>
            <PiTabHeader>sdsdsdsdsdsssssssssssss</PiTabHeader>
          </PiTabHeaderPanel>
          <PiTabPanel />
          <PiTabPanel />
          <PiTabPanel />
        </PiTabGroup>

        <PiHeaderMenu
          activeKey={'headerLinkactive'}
          image={'Logo'}
          onMenuClick={MenuClick}
          onProfileClick={ProfileClick}
          options={primaryHeaderOptions}
          profileOptions={[
            {
              id: 'user_profile',
              name: 'User Profile',
              route: '',
              url: ''
            },
            {
              id: 'logout',
              name: 'Logout',
              route: '',
              url: ''
            }
          ]}
          headerDropdownOptions={[
            {
              id: 1,
              name: 'Test1'
            },
            {
              id: 2,
              name: 'Test2'
            }
          ]}
          xsImage='/Logo.svg'
          userImage='https://buzzworlddev-iidm.enterpi.com:8446/storage/Uploads/profile_images/1656418943.png'
        />
        <PiTypography component='h4'>Testt</PiTypography>

        <PiAttachmentList
          attachmentItems={[
            {
              downloadUrl: 'http://www.africau.edu/images/default/sample.pdf',
              id: 1,
              largeimage: 'https://picsum.photos/200/300',
              name: 'Invoice.xlsx',
              size: '',
              thumbnail: 'https://picsum.photos/200/300',
              type: 'png'
            },
            {
              downloadUrl: '',
              id: 2,
              largeimage: '',
              name: 'Invoice.ppt',
              size: '',
              thumbnail: '',
              type: 'ppt',
              url: 'http://www.africau.edu/images/default/sample.pdf',
              isDeleteImg: true
            }
          ]}
          onClickDelete={deleteImage}
          onClickDownload={function noRefCheck() {}}
          onClickPreview={function noRefCheck() {}}
        />
        <PiBreadCrumb
          items={[
            {
              href: '',
              label: 'Special Pricing'
            },
            {
              href: '',
              label: 'Pricing Rules'
            }
          ]}
        />
        <PiPagination
          onChange={function noRefCheck() {}}
          pages={10}
          selectedIndex={2}
        />
        <PiAddress
          data={{
            address1: '1',
            address2: '123',
            city: 'Hyderabad',
            country: 'India',
            state: 'Telangana',
            street: 'steet name',
            zip: 500062
          }}
          label='Customer Address'
        />

        <PiPermissionsList
          inputObject={[
            {
              code: 'admin',
              name: 'Admin',
              type: 'button',
              options: [],
              children: [
                {
                  name: 'Account Type',
                  id: 'aa77fd23-4920-4a8c-b145-05e7812d2fbc',
                  code: 'account-type',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Branches',
                  id: '0215178f-ed89-420a-99c5-3c5c44055cd0',
                  code: 'branches',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Classification',
                  id: '0b872e25-d7e8-4e4d-8c7e-6442036e4d3a',
                  code: 'classification',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Contact Types',
                  id: '50679835-1756-4d7c-822e-52de309aff74',
                  code: 'contact_types',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Industry',
                  id: '97436ff9-32a0-4ffd-b152-74dc92c9e446',
                  code: 'industry',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Po Min Qty',
                  id: 'f3602b46-4575-4921-a242-3cff682a3f8d',
                  code: 'po_min_qty',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Quote Approval',
                  id: '01c90bd6-a4cf-496f-ae79-5bf51a9ff5c6',
                  code: 'quote_approval',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Sales Potential',
                  id: '5389e522-aa3a-4a5f-9c8d-3debcf6a7ee2',
                  code: 'sales_potential',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'User Roles',
                  id: '6f611df1-566e-4101-a1ec-9474f6b41574',
                  code: 'user_roles',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Users',
                  id: 'b03e0910-35a5-4969-a44a-8d700485191a',
                  code: 'users',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: [
                    {
                      name: 'Sync',
                      id: 'a6877671-2ba7-40cd-840c-290e0487c947',
                      code: 'users_sync',
                      options: [
                        { label: 'Yes', value: '1' },
                        { label: 'No', value: '0' }
                      ],
                      type: 'button'
                    }
                  ]
                },
                {
                  name: 'Vendors',
                  id: 'd9bc7dc5-736e-4b05-9540-aa5c51f3e583',
                  code: 'vendors',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                }
              ]
            },
            {
              code: 'organizations',
              name: 'Organizations',
              type: 'button',
              options: [],
              children: [
                {
                  name: 'Contacts',
                  id: '5a0b0224-fcab-4275-aab1-0426e4cfc318',
                  code: 'contacts',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: [
                    {
                      name: 'Export',
                      id: '2a75bae1-8003-450c-948f-1abc87d3e6ed',
                      code: 'contacts_export',
                      options: [
                        { label: 'Yes', value: '1' },
                        { label: 'No', value: '0' }
                      ],
                      type: 'button'
                    },
                    {
                      name: 'Sync',
                      id: '5c64c111-169c-431c-9481-5cf7df666a88',
                      code: 'contacts_sync',
                      options: [
                        { label: 'Yes', value: '1' },
                        { label: 'No', value: '0' }
                      ],
                      type: 'button'
                    }
                  ]
                },
                {
                  name: 'Organizations',
                  id: 'f13ea03e-5c17-4f66-8f50-d23df01538cb',
                  code: 'organizations',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: [
                    {
                      name: 'Export',
                      id: '024dbdf8-2e00-4706-9ed7-5fc7c8f5489f',
                      code: 'organizations_export',
                      options: [
                        { label: 'Yes', value: '1' },
                        { label: 'No', value: '0' }
                      ],
                      type: 'button'
                    },
                    {
                      name: 'Sync',
                      id: 'b03dae3b-2234-45d8-b133-782ca52a2fd7',
                      code: 'organizations_sync',
                      options: [
                        { label: 'Yes', value: '1' },
                        { label: 'No', value: '0' }
                      ],
                      type: 'button'
                    }
                  ]
                }
              ]
            },
            {
              code: 'pricing',
              name: 'Pricing',
              type: 'button',
              options: [],
              children: [
                {
                  name: 'Discount Codes',
                  id: '4bae0af6-4060-44f8-b6c5-68fa40de84d1',
                  code: 'discount-codes',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: [
                    {
                      name: 'Export',
                      id: 'b917fb57-b0d7-415b-9d9c-d7c282a6d3ad',
                      code: 'discount-codes_export',
                      options: [
                        { label: 'Yes', value: '1' },
                        { label: 'No', value: '0' }
                      ],
                      type: 'button'
                    }
                  ]
                },
                {
                  name: 'Pricing',
                  id: '5e9701dd-9cbb-473a-9209-0d7b6bef8525',
                  code: 'pricing',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: [
                    {
                      name: 'Export',
                      id: '5f788722-7a77-4e59-94f3-d7ff8c3c2a9e',
                      code: 'pricing_export',
                      options: [
                        { label: 'Yes', value: '1' },
                        { label: 'No', value: '0' }
                      ],
                      type: 'button'
                    },
                    {
                      name: 'Import',
                      id: '4b0988c4-6e4f-4974-9b49-c2b71babbdc4',
                      code: 'pricing_import',
                      options: [
                        { label: 'Yes', value: '1' },
                        { label: 'No', value: '0' }
                      ],
                      type: 'button'
                    }
                  ]
                },
                {
                  name: 'Special Pricing',
                  id: '137bf8d0-3420-4ecf-8e28-24fff029b2db',
                  code: 'special-pricing',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: [
                    {
                      name: 'Export',
                      id: '1b04ff71-0e6b-4989-a955-adda9fcbcf18',
                      code: 'special-pricing_export',
                      options: [
                        { label: 'Yes', value: '1' },
                        { label: 'No', value: '0' }
                      ],
                      type: 'button'
                    }
                  ]
                }
              ]
            },
            {
              code: 'repairs',
              name: 'Repairs',
              type: 'button',
              options: [],
              children: [
                {
                  name: 'Jobs',
                  id: 'ba7e18dd-1ac7-46e2-b290-88283023151d',
                  code: 'jobs',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Jobs Assigned To Me',
                  id: 'd769e832-c388-4dbb-915c-d7c9f5c78719',
                  code: 'jobs_assigned_to_me',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Part Purchase',
                  id: '3a30cc41-b767-41a0-a809-ec6f7f191be0',
                  code: 'part_purchase',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Repair Request',
                  id: 'cb8e1496-4257-4952-9886-4ee76ecc7890',
                  code: 'repair-request',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                }
              ]
            },
            {
              code: 'quotes',
              name: 'Quotes',
              type: 'button',
              options: [],
              children: [
                {
                  name: 'Quote Approval Limit',
                  id: '77284d20-5e2c-4449-9f07-db817608339f',
                  code: 'quote_approval_limit',
                  options: [
                    { label: 'None', value: '0' },
                    { label: '$10k', value: '10000' },
                    { label: '$25k', value: '25000' },
                    { label: '$50k', value: '50000' }
                  ],
                  type: 'select',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Quote for Parts',
                  id: '115801d2-a046-4d9b-969c-66e7c35b62e0',
                  code: 'quote_for_parts',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                },
                {
                  name: 'Quote for Repair',
                  id: '0458c454-c261-44e5-9ec3-64e9785d9593',
                  code: 'quote_for_repair',
                  options: [
                    { label: 'None', value: '0' },
                    { label: 'View', value: '1' },
                    { label: 'Edit', value: '2' }
                  ],
                  type: 'button',
                  id_type: 'default',
                  children: []
                }
              ]
            }
          ]}
          values={{
            'aa77fd23-4920-4a8c-b145-05e7812d2fbc': '2',
            '0215178f-ed89-420a-99c5-3c5c44055cd0': '2',
            '0b872e25-d7e8-4e4d-8c7e-6442036e4d3a': '0',
            '5a0b0224-fcab-4275-aab1-0426e4cfc318': '0',
            '50679835-1756-4d7c-822e-52de309aff74': '0',
            '4bae0af6-4060-44f8-b6c5-68fa40de84d1': '0',
            '5f788722-7a77-4e59-94f3-d7ff8c3c2a9e': '0',
            '2a75bae1-8003-450c-948f-1abc87d3e6ed': '0',
            'b917fb57-b0d7-415b-9d9c-d7c282a6d3ad': '0',
            '024dbdf8-2e00-4706-9ed7-5fc7c8f5489f': '0',
            '1b04ff71-0e6b-4989-a955-adda9fcbcf18': '0',
            '4b0988c4-6e4f-4974-9b49-c2b71babbdc4': '0',
            '97436ff9-32a0-4ffd-b152-74dc92c9e446': '0',
            'ba7e18dd-1ac7-46e2-b290-88283023151d': '0',
            'd769e832-c388-4dbb-915c-d7c9f5c78719': '0',
            'f13ea03e-5c17-4f66-8f50-d23df01538cb': '0',
            '3a30cc41-b767-41a0-a809-ec6f7f191be0': '0',
            'f3602b46-4575-4921-a242-3cff682a3f8d': '0',
            '5e9701dd-9cbb-473a-9209-0d7b6bef8525': '0',
            '01c90bd6-a4cf-496f-ae79-5bf51a9ff5c6': '0',
            '77284d20-5e2c-4449-9f07-db817608339f': {
              label: 'Yes1',
              value: '1'
            },
            '115801d2-a046-4d9b-969c-66e7c35b62e0': '2',
            '0458c454-c261-44e5-9ec3-64e9785d9593': '2',
            'cb8e1496-4257-4952-9886-4ee76ecc7890': '0',
            '5389e522-aa3a-4a5f-9c8d-3debcf6a7ee2': '0',
            '137bf8d0-3420-4ecf-8e28-24fff029b2db': '0',
            'a6877671-2ba7-40cd-840c-290e0487c947': '0',
            '5c64c111-169c-431c-9481-5cf7df666a88': '0',
            'b03dae3b-2234-45d8-b133-782ca52a2fd7': '0',
            '6f611df1-566e-4101-a1ec-9474f6b41574': '0',
            'b03e0910-35a5-4969-a44a-8d700485191a': '0',
            'd9bc7dc5-736e-4b05-9540-aa5c51f3e583': '2'
          }}
          onValueChange={(e: any, obj: any) => {
            console.log(e, obj)
          }}
        />

        <PiIconDropdownMenu
          items={[
            {
              id: '1',
              element: (
                <div
                // eslint-disable-next-line no-script-url
                >
                  {/*<ImgTag src={ArrowRightIcon} />*/}
                  <span className='link-icon-text'>asdasdas</span>
                </div>
              )
            }
          ]}
          onOpenChange={function noRefCheck() {}}
          className='action-item'
        />
        {/*<PiDateRangePicker  selectsRange={true}
            startDate={''}
            endDate={''}
            onChange={() =>{}}
            placeholderText={'Start & End Dateasdas'}
            minDate={''}
            isClearable
            />*/}

        {/*<PiLeftMenu
  activeKey="repairs"
  onMenuClick={function noRefCheck(){}}
  options={[
    {
      icon: 'https://picsum.photos/200/300',
      key: 'dashboard',
      label: 'Dashboard',
      email: 'raj@enterpi.com',
      display: true
    },
    {
      children: [
        {
          key: 'create',
          label: 'Create'
        },
        {
          key: 'edit',
          label: 'Edit'
        }
      ],
      key: 'quotes',
      label: 'Quotes'
    },
    {
      href: 'https://www.ag-grid.com/static/react-96a99d335de93d957cc594a0f6cf65d3.svg',
      key: 'repairs',
      label: 'Repairs'
    },
    {
      key: 'orders',
      label: 'Orders'
    },
    {
      key: 'invoices',
      label: 'Invoices'
    }
  ]}
/>*/}

        {/*<div className="ag-theme-alpine ag-style">
                    <PiServerGrid2
                      columns={columns}
                      mode="paginate"
                      //searchValue={searchParam}
                      //serverFilterOptions={apiFilterData ? apiFilterData : {}}
                     
                      onGridReady={onGridReady}
                   
                      paginationPageSize={25}
                      onPaginationChanged={(e: any) =>
                        pageChanged(e)
                      }
                      requestInfo={cellValueData}
                      rowHeight={40}
                      cacheBlockSize={25}
                      // overlayLoadingTemplate={
                      //    '<span className="ag-overlay-loading-center">Please wait while your rows are loading...</span>'
                      //  }
                      overlayNoRowsTemplate={`<span className="ag-overlay-loading-center no-data-styles" >No  Found </span>`}
                    />
                  </div>

 <PiButton
        appearance='secondary'
        label='Primary'
        libraryType='atalskit'
        onClick={() => {
          //setCellValueData({})
          //cellValueData = {}
          cellValueData = { body: {},
     method: 'GET',
     headers: {},
     // url: ' https://buzzworlddev-iidm.enterpi.com:8446/v1/Contacts?page=1'
     url: `${baeurl}`,
     test:2}
          setCellValueData({...cellValueData}
    
   )

  // gridApi.refreshServerSideStore({ page: 2, purge: false })
  setTimeout(() => {
              gridApi.purgeServerSideCache()

  }, 1000);

  }}
      />*/}
      </>
    </>
  )
}

export default App
function ProfileClick(): void {
  throw new Error('Function not implemented.')
}

function MenuClick(): void {
  throw new Error('Function not implemented.')
}
