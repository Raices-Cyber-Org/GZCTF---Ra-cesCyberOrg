import { FC, SVGProps } from 'react'

interface MainIconProps extends SVGProps<SVGSVGElement> {
  ignoreTheme?: boolean
}

const MainIcon: FC<MainIconProps> = (props: MainIconProps) => {
  const { ignoreTheme, ...svgProps } = props
  const MainIconColor = ignoreTheme ? "#fff": "#c286e5"

  return (
    <svg width="480" viewBox="0 0 1500 1500" height="480" {...svgProps}>
    <defs>
    <clipPath id="a">
    <path d="M750 1446h820v323.277H750Zm0 0" />
    </clipPath>
    <clipPath id="b">
    <path d="M1165 309.191h25V356h-25zm0 0" />
    </clipPath>
    <clipPath id="c">
    <path d="M1725 958h42.074v35H1725Zm0 0" />
    </clipPath>
    </defs>
    <path fill={MainIconColor}
    d="M1071.77 1244.469c-28.57 2.972-58.364 4.047-61.926-5.86-9.91-27.59-44.73-35.726-41.074-39.18 1.437-1.37 13.808-.687 34.335 3.052 10.114 1.828 40.254 11.617 50.258 13.726 5.137 1.09 9.41 2.852 13.07 4.719 14.723 7.52 40.051 9.844 59.465 14.496 10.528 2.527 19.282 8.441 23.758 9.91-5.191-6.293-13.12-8.512-17.37-10.125-7.556-2.89-14.145-5.726-21.044-6.937-11.492-1.993-18.687-2.649-27.074-6.79-20.238-9.964-31.582-14.656-51.2-17.68.833-2.152 35.278-5.003 49.989-4.386 15.379.606 40.508 4.465 59.129 3.445 6.723-.378 12.45-1.546 18.797-2.234 6.344-.672 13.957 1.156 20.945 2.73-6.074-3.671-18.484-4.976-28.02-4.707-9.515.286-18.257 1.63-28.34 1.063-14.777-.832-29.257-5.605-44.113-6.629-19.48-1.328-34.472 4.156-53.98 2.934-10.875-.7-21.027-3.926-31.973-5.418-27.277-3.739-72.52 2.015-111.875-.215-20.328-1.184-43.52-.797-60.851-5.824-14.008-4.059-42.832-22.09-44.352-24.524-4.332-6.91 15.297-12.004 30.344-10.5 15.043 1.52 26.434 3.508 41.504 4.961 18.258 1.762 37.781 1.145 56.05.297 15.02-.715 46.344-1.816 61.458-.566 26.312 2.125 36.609 6.43 62.894 8.687-14.828-3.254-29.914-6.226-44.515-9.68-17.598-4.195-42.391-3.562-52.555-3.539-102.262.528-97.637-16.886-158.649-20.691-28.289-1.691-77.78-2.285-106.164-1.398-18.62.566-37.253 4.707-55.902 4.882-9.625.078-19.238.133-28.867.2-4.637.016-10.38-6.586-12.246-4.852-8.793-.902-31.488 3.508-32.617 3.602-12.829.996-27.309.5-39.528 2.449-9.898 1.558-27.75 5.875-33.426 10.312-13.765 5.887-27.199 12.516-44.527 15.516-7.273 1.262-15.02 1.84-22.062 3.414-15.532 3.453-25.344 11.105-40.082 15.34-14.438 4.14-31.864 4.558-48.106 4.129-16.226-.43-32.469-1.586-48.789-.176-16.324 1.398-33.332 6.062-39.488 13.336 14.75-8.965 42.27-9.934 64.953-8.508 22.668 1.398 46.976 4.098 68.406-.875 15.88-3.684 27.453-11.16 44.02-13.984 5.847-.993 13.187-1.157 16.886 1.007 3.332 1.965 1.504 4.856.32 7.41-5.835 12.505-17.3 14.2-29.804 19.954-9.008 4.152-18.824 5.98-29.984 8.699-18.66 4.527-39.703 7.566-60.032 9.41-20.328 1.817-41.691 4.906-56.16 12.152-8.336 4.184-13.672 9.399-21.441 13.77-17.844 10.043-43.617 17.02-51.442 29.133-4.421 6.844-4.933 12.8-5.296 19.765-.352 6.762-5.461 13.645-14.372 19.332 10.188-6.761 19.438-11.52 23.512-19.37 4.52-8.7 1.79-17.305 14.254-24.485 10.715-6.184 29.727-15.098 41.625-20.867 7.516-3.645 12.625-6.172 19.535-10.07 15.555-8.766 34.578-10.083 57.625-13.11 23.032-3.023 51.332-8.16 73.489-12.555 22.156-4.41 44.625-14.898 51.44-25.668 3.118-4.933 1.692-7.57 5.188-12.464 6.254-8.711 22.899-15.125 40.243-19.48 17.355-4.329 25.504-8.821 55.351-9.141 6.399-.082 39.488-3.16 53.27 4.96 7.449 4.368-.551 9.708-6.778 14.668-14.222 11.332-40.562 17.829-63.918 25.223-23.367 7.367-46.757 17.785-48.21 30.774-.836 7.394.308 14.293 7.675 21.648 6.602 6.574 14.59 12.098-10.39 16.457-13.22 2.313-36.008 1.3-48.832 4.14-13.621 3.012-19.887 9.493-30.926 14.36-15.153 6.668-35.762 6.746-55.969 8.066-30.898 2.043-58.484 13.473-68.867 27.13 6.187-5.512 19.656-8.86 30.762-12.72 25.078-8.722 57.746-6.074 77.445-9.128-7.316 10.113 3.184 26.77 8.281 36.922 5.621 11.183-4.277 11.32-6.332 25.316-1.465 9.8 7.192 21.16 26.7 24.414-11.91-4.45-14.696-12.516-13.094-19.762 1.601-7.234 6.695-14.347 7.14-21.605.942-14.98-20.57-32.445-2.328-45.094 13.434-9.305 17.047-16.594 38.442-20.371 31.5-5.55 64.816-2.004 75.195-14.547 4.543-5.5-4.465-13.066-6.883-18.742-13.996-32.914 50.309-40.684 55.324-38.399 7.114 3.172-8.726 13.54 2.395 23.043 7.488 6.415 25.879 9.239 30.02 16.336 3.847 6.618-8.563 12.868-12.235 19.606-7.61 13.941 23.18 27.992 12.691 41.543-10.027 12.988-47.242 14.238-72.465 21.39-37.539 10.66-44.652 38.883-13.324 52.516-21.11-18.5-12.828-40.254 22.52-45.914 15.543-2.488 34.082-4.746 48.199-8.727 13.82-3.886 23.355-15.863 39.273-16.226 11.872-.27 20.598 13.808 26.325 18.676 5.726 4.867 8.605 10.418 14.586 15.218 9.789 7.836 28.261 14.586 25.761 23.688-1.25 4.52-2.89 7.8-3.066 13.23 12.734-8.39 13.863-20.3 2.719-29.027-6.805-5.324-17.723-9.547-21.512-15.527-2.504-3.926-11.953-20.047-15.746-23.72-13.781-13.347-29.672-10.538-39.781-24.573-20.813-28.883 23.566-27.684 13.953-40.809-8.48-11.613-44.125-17.664-40.711-29.914 2.34-8.457 22.574-13.16 31.02-20.73 3.667-3.309 4.988-7.086 8.777-10.368 6.507-5.617 20.558-9.101 33.96-8.402 13.407.7 16.743 7.797 20.239 13.914 7.676 13.461-14.238 24.887-6.2 38.305 2.5 4.168 8.657 7.972 8.067 12.316-.566 4.086-6.965 7.395-11.133 11.012-9.574 8.297-6.75 19.32 6.684 26.191 13.672 7.004 34.914 9.168 52.836 13.594 17.91 4.434 34.34 14.047 26.285 22.8 11-7.41 9.344-18.378-3.766-24.952-10.914-5.485-27.265-7.559-41.312-11.106-14.067-3.55-27.375-10.367-23.637-17.707 3.266-6.414 18.406-10.593 19.992-17.129.672-2.797.793-5.808-1.574-8.39-20.086-21.903 5.527-40.953 62.41-18.043 18.946 7.636 3.227 21.445 18.086 26.875 17.047 6.199 61.656-1.735 71.457 7.344 9.238 8.496-23.554 24.308-22.68 33.828.872 9.543 20.004 16.75 24.32 26.093 5.997 12.95-17.612 24.633-22.316 37.727-4.062 11.293 7.704 23.46 28.434 29.43-18.5-6.532-17.504-19.844-9.906-30.114 7.594-10.3 20.07-20.289 18.484-31.14-1.437-9.867-14.426-18.633-18.418-28.383-4.008-9.746 8.469-19.871 29.39-21.2 50.513-3.187 31.5 24.16 53.145 34.833 20.29 10.004 72.403 16.472 72.348 35.05-.012 8.43-1.867 19.32-17.57 23.598 31.054-7.273 40.777-28.394 18.726-41.14-18.242-10.543-75.437-22.778-66.11-32.926-3.023 3.293 51.536 6.117 95.958 1.02 26.137-3.012 53.496 4.773 60.824 16.753-6.144-10.058-19.492-17.937-38.598-20.613-19.12-2.676-33.386-.535-53.093-.188-19.711.325-46.735 1.696-60.664-4.988-10.22-4.918-9.696-14.855-21.957-18.66-11.254-3.508-26.715-3.2-37.04-7.29-8.066-3.183-11.12-8.347-17.988-12.112-20.531-11.278-70.734 4.707-72.05-9.895-1.684-18.633-26.153-28.273-50.622-31.621-16.093-2.207-32.39-5.836-41.035-12.57-8.644-6.739-6.949-16.742 6.91-21.137 13.93-4.398 33.586-1.52 46.211 3.766 12.614 5.28 20.692 12.504 31.422 18.648 25.653 14.64 73.383 19.95 113.016 18.164 11.633-.66 82.406-2.676 99.21 32.762 4.223 8.887 12.946 18.703 30.95 22.617 21.566 4.652 49.785-8.473 70.922-3.242 17.465 4.289 20.531 20.41 30.898 28.031 11.64 8.54 34.325 11.094 54.02 15.652-30.008-6.937-45.348-18.18-54.977-28.41-10.945-11.601-17.101-27.05-49.261-23.73" />
    <g clip-path="url(#a)" transform="translate(-483.602 -309.191)">
    <path fill={MainIconColor}
    d="M838.586 1596.898c22.707 4.653 46.36 6.563 49.168-6.64 7.824-36.719 35.469-46.84 32.562-51.535-1.14-1.856-10.957-1.168-27.265 3.363-8.028 2.23-31.957 14.64-39.903 17.234-4.074 1.344-7.464 3.606-10.367 6.024-11.683 9.75-31.812 12.25-47.23 17.988-8.364 3.121-15.317 10.906-18.864 12.762 4.098-8.403 10.407-11.16 13.782-13.242 5.996-3.711 11.226-7.356 16.71-8.782 9.13-2.394 14.844-3.078 21.497-8.43 16.066-12.906 25.074-18.902 40.66-22.464-.672-2.89-28.047-7.625-39.746-7.262-12.235.363-32.211 4.774-47.027 2.715-5.368-.738-9.922-2.54-14.981-3.695-5.055-1.157-11.105 1.035-16.668 2.902 4.824-4.773 14.707-6.078 22.29-5.324 7.581.726 14.546 2.863 22.562 2.433 11.75-.617 23.273-6.613 35.078-7.515 15.488-1.196 27.414 6.601 42.914 5.433 8.644-.66 16.71-4.746 25.398-6.48 21.672-4.332 57.582 4.18 88.801 1.664 16.137-1.3 34.527-.563 48.281-7.043 11.094-5.242 33.977-28.758 35.188-31.918 3.441-9.05-12.13-15.879-24.067-14.05-11.941 1.827-20.96 4.327-32.93 6.05-14.476 2.082-29.98.969-44.488-.496-11.925-1.211-36.796-3.336-48.804-2.07-20.907 2.175-29.082 7.636-49.973 9.894 11.777-3.914 23.77-7.46 35.371-11.7 13.985-5.108 33.668-3.667 41.746-3.413 81.196 2.62 77.496-20.653 125.926-24.942 22.441-1.949 61.684-2.527 84.191-1.421 14.75.699 29.524 6.023 44.301 6.128 7.625.04 15.262.04 22.883.027 3.684-.012 8.254-8.644 9.723-6.425 6.965-1.25 21.336 4.73 23.164 4.316.86-.203 1.789-.098 2.676 0 10.164 1.129 21.644.281 31.328 2.594 7.836 1.867 21.98 7.136 26.457 12.758 10.906 7.367 21.527 15.675 35.254 19.16 5.765 1.465 11.898 2.015 17.476 3.87 12.29 4.075 20.047 13.716 31.719 18.77 11.426 4.95 25.246 4.961 38.129 3.871 12.867-1.101 25.758-3.16 38.707-1.933 12.95 1.223 26.418 6.586 31.258 15.77-11.641-11.04-33.489-11.239-51.48-8.618-18 2.606-37.282 6.883-54.25 1.063-12.571-4.317-21.727-13.66-34.837-16.887-4.636-1.145-10.457-1.184-13.39 1.719-2.649 2.61-1.207 6.32-.282 9.601 4.57 16.051 13.66 17.961 23.543 25.075 7.125 5.136 14.895 7.234 23.73 10.417 14.774 5.325 31.446 8.606 47.556 10.301 16.105 1.68 33.046 4.907 44.488 13.754 6.586 5.094 10.797 11.629 16.941 17.008 14.102 12.328 34.524 20.328 40.668 35.695 3.484 8.7 3.848 16.418 4.102 25.438.254 8.765 4.261 17.476 11.308 24.496-8.054-8.348-15.355-14.145-18.57-24.172-3.535-11.105-1.316-22.36-11.172-31.18-8.469-7.582-23.5-18.394-32.91-25.41-5.945-4.437-9.992-7.531-15.465-12.316-12.285-10.77-27.371-11.793-45.629-14.95-18.246-3.16-40.66-8.956-58.203-14.039-17.547-5.082-35.32-18.12-40.672-31.917-2.46-6.333-1.316-9.774-4.074-16.04-4.922-11.132-18.098-19.078-31.836-24.39-13.727-5.297-20.18-10.969-43.832-10.957-5.066 0-31.297-3.59-42.242 7.086-5.903 5.77.418 12.625 5.336 19.011 11.254 14.575 32.093 22.668 50.582 31.836 18.5 9.172 37 22.188 38.101 38.993.633 9.574-.28 18.539-6.144 28.218-5.242 8.672-11.602 16.016 8.176 21.125 10.457 2.7 28.5.832 38.652 4.168 10.781 3.547 15.73 11.778 24.441 17.758 11.98 8.23 28.317 7.719 44.317 8.809 24.468 1.652 46.289 15.515 54.449 32.832-4.863-6.938-15.527-10.797-24.32-15.422-19.832-10.445-45.727-6.012-61.32-9.383 5.753 12.863-2.622 34.738-6.696 48.023-4.504 14.657 3.348 14.547 4.918 32.606 1.117 12.637-5.781 27.602-21.227 32.375 9.45-6.094 11.668-16.621 10.434-25.95-1.238-9.331-5.246-18.394-5.566-27.777-.688-19.375 16.414-42.609 2-58.472-10.594-11.684-13.43-21.016-30.371-25.344-24.926-6.414-51.317-1.102-59.493-17.156-3.59-7.043 3.575-17.047 5.5-24.457 11.2-42.914-39.73-51.856-43.71-48.871-5.649 4.222 6.87 17.453-1.95 29.968-5.957 8.446-20.531 12.371-23.824 21.688-3.066 8.644 6.75 16.605 9.625 25.277 5.996 18-18.406 36.758-10.148 54.223 7.917 16.726 37.363 17.664 57.3 26.39 29.688 13.004 35.227 49.372 10.395 67.817 16.75-24.508 10.27-52.477-17.695-59.063-12.29-2.879-26.942-5.472-38.118-10.367-10.93-4.785-18.445-20.195-31.043-20.433-9.382-.176-16.336 18.296-20.867 24.722-4.543 6.426-6.828 13.715-11.574 20.047-7.773 10.367-22.387 19.453-20.422 31.3.965 5.876 2.27 10.122 2.39 17.224-10.054-10.743-10.929-26.301-2.097-37.848 5.39-7.047 14.04-12.719 17.05-20.559 1.99-5.16 9.505-26.312 12.516-31.152 10.93-17.559 23.5-14.156 31.543-32.574 16.551-37.848-18.593-35.672-10.945-52.906 6.734-15.208 34.984-23.555 32.309-39.434-1.844-10.945-17.844-16.805-24.512-26.582-2.902-4.262-3.953-9.168-6.95-13.39-5.136-7.259-16.269-11.696-26.89-10.704-10.62.996-13.27 10.262-16.055 18.258-6.117 17.613 11.227 32.379 4.829 49.937-1.989 5.446-6.872 10.473-6.414 16.118.445 5.324 5.5 9.601 8.792 14.265 7.57 10.715 5.313 25.13-5.335 34.23-10.836 9.278-27.657 12.317-41.856 18.247-14.184 5.941-27.21 18.648-20.84 30.062-8.699-9.613-7.379-24.011 3.012-32.71 8.66-7.247 21.605-10.071 32.738-14.833 11.133-4.757 21.688-13.777 18.73-23.34-2.57-8.32-14.546-13.671-15.784-22.195-.54-3.644-.618-7.582 1.25-10.972 15.96-28.72-4.301-53.415-49.41-23.407-15.032 10.016-2.594 28.114-14.372 35.254-13.511 8.188-48.843-2.34-56.629 9.543-7.316 11.188 18.66 32.094 17.961 44.598-.699 12.57-15.863 22.101-19.28 34.418-4.747 17.101 13.929 32.418 17.64 49.613 3.215 14.828-6.09 30.95-22.508 39.004 14.644-8.781 13.863-26.285 7.851-39.797-6.007-13.527-15.89-26.676-14.625-40.996 1.141-13.027 11.426-24.629 14.602-37.469 3.172-12.855-6.71-26.191-23.289-28.047-40.023-4.449-24.953 31.825-42.094 45.93-16.082 13.203-57.383 21.55-57.316 46.371.012 11.25 1.504 25.828 13.941 31.54-24.59-9.708-32.347-38.114-14.883-54.99 14.454-13.956 59.778-29.901 52.383-43.425 2.39 4.383-40.847 7.863-76.097.457-20.747-4.37-42.446 5.617-48.227 21.7 4.852-13.5 15.418-23.88 30.586-27.188 15.164-3.305 26.484-.238 42.121.434 15.637.671 37.07 2.699 48.094-6.079 8.105-6.453 7.691-19.644 17.398-24.59 8.926-4.558 21.188-4.062 29.375-9.398 6.399-4.168 8.809-10.973 14.266-15.894 16.27-14.707 56.05 6.44 57.101-12.77 1.344-24.496 20.758-37.055 40.16-41.438 12.758-2.89 25.68-7.675 32.536-16.511 6.87-8.805 5.539-21.86-5.446-27.59-11.023-5.738-26.62-2.027-36.636 4.867-10.004 6.887-16.418 16.324-24.942 24.336-20.34 19.121-58.176 25.883-89.62 23.004-9.212-.898-65.4-4.84-78.696 42.125-3.348 11.789-10.27 24.777-24.55 29.738-17.102 5.918-39.528-12.273-56.306-5.726-13.875 5.406-16.27 27.144-24.484 37.254-9.21 11.335-27.227 14.332-42.863 20.128 23.824-8.808 35.98-23.769 43.59-37.39 8.66-15.488 13.511-36.168 39.07-30.965" />
    </g>
    <path fill={MainIconColor}
    d="m994.477 595.488 4.086-1.535 1.882.594c18.824 5.953 35.348 10.215 50.5 13.027 14.84 2.676 29.992 4.57 45.293 5.7a495.985 495.985 0 0 1-13.215-2.149c-17.035-3.055-36.933-8.363-59.144-15.773l-15.422-5.149 19.293-7.14c57.074-20.918 94.008-47.258 117.766-71.149-20.059 13.418-43.454 24.898-66.313 35.129l-10.23 4.586 2.3-10.957c3.453-16.524 8.094-30.371 13.809-41.195a121.935 121.935 0 0 0-8.445 14.117c-5.028 9.828-9.184 22.37-12.328 37.281l-.618 2.934-2.773 1.156c-32.629 13.672-67.922 26.93-102.043 39.742-34.219 12.852-66.527 24.992-94.129 36.746l-15.84 6.734 8.672-14.882c6.16-10.582 11.297-20.422 15.68-30.118 6.21-13.753 12.637-31.18 19.426-49.636l1.761-4.801 3.645-.297c18.445-1.492 33.586-3.777 46.262-6.976a223.196 223.196 0 0 0 12.382-3.485c-14.222 3.067-31.703 5.192-52.109 6.332l-8.742.5 3.066-8.203c12.52-33.476 31.516-84.324 62.602-126.312-20.317 19.09-40.094 43.882-53.54 75.195a898.099 898.099 0 0 0-4.448 10.5l-6.524 15.652-4.289-16.402c-4.961-19.027-7.797-36.102-8.43-50.758-.386-9.25-.386-21.683.957-36.137-4.035 19.145-6.172 40.832-4.464 64.32 1.101 15.165 4.449 32.669 9.976 52.016l.524 1.856-1.25 3.242c-17.356 44.57-29.727 83.96-67.454 129.539l-6.222 4.773c-21.555 11.47-42.985 25.008-63.692 40.215l-7.07 5.203-1.883-8.578c-6.37-28.84-9.156-54.36-8.281-75.828.523-12.988 2.203-31.422 6.8-52.879-8.562 25.035-14.988 54.371-15.323 86.465-.188 16.684 1.8 35.867 5.886 57.02l.66 3.359-2.648 2.164c-24.281 19.723-42.055 37.406-52.703 48.75l-7.235 7.719-2.488-10.285c-3.789-15.637-7.258-34.38-10.043-49.45-2.433-13.109-4.515-24.445-5.902-28.84-6.508-20.624 5.555-146.55 31.598-226.828l.414-1.304 3.738-3.711c13.566-13.512 24.281-24.188 37.754-36.84l7.07-6.789c28.625-27.469 69.738-66.914 106.055-117.008-15.598 19.828-33.719 39.621-54.723 58.32-29.039 26.032-55.984 50.758-80.101 73.504l-16.391 13.7c3.039-8.75 13.121-37.122 16.133-45.551 12.008-33.961 32.793-92.77 40.468-163.758-3.398 22.293-8.617 45.285-16.265 68.312l-2.906 8.727-11.254-11.117c-14.547-14.32-27.102-26.688-35.992-41.91-3.735-6.399-7.434-12.934-10.93-19.762 4.558 10.582 10.379 21.715 17.762 33.29 6.722 10.581 18.984 25.745 35.48 43.855l2.328 2.554-8.848 24.203c-46.05 125.871-79.324 216.825-89.757 286.524l-2.301 15.285-8.2-13.11c-20.558-32.843-39.878-68.996-57.425-107.476l-1.317-2.89 1.75-2.637c11.762-17.774 20.852-34.11 26.997-48.59 13.66-32.024 18.527-62.008 19.117-87.418-3.766 24.496-10.461 45.055-15.809 58.754-6.601 16.93-17.36 36.558-31.933 58.312l-5.875 8.766-4.13-9.723c-15.85-37.254-30.304-76.945-42.956-118.004l-.817-2.664 1.613-2.297c12.208-17.398 20.864-32.363 26.497-45.754 5.07-12.03 8.433-23.62 10.543-34.527a206.643 206.643 0 0 1-5.22 15.246c-5.605 14.508-15.245 31.625-28.663 50.863l-6.844 9.817-3.332-11.484c-15.582-53.59-26.016-101.95-32.738-140.04 1.383 22.454 4.449 49.504 10.61 81.622l2.62 13.675-11.469-7.879c-25.195-17.316-44.207-32.996-58.082-47.933-.765-.832-1.546-1.68-2.312-2.54a262.986 262.986 0 0 0 21.539 24.766c12.797 13.082 29.348 26.649 50.594 41.477l1.828 1.277.484 2.164c9.102 40.754 22.168 85.215 38.84 132.11l4.316 12.156-11.898-4.96c-46.883-19.524-161.621-70.68-214.34-124.032a155.42 155.42 0 0 1-3.789-4.02 241.612 241.612 0 0 0 22.774 25.184c50.125 48.172 138.968 92.754 203.84 125.293l3.523 1.762.793 2.07c2.578 6.789 5.187 13.683 7.836 20.703 15.004 39.73 32 84.77 55.11 133.32l5.03 10.567-11.43-2.528c-32.925-7.312-53.577-16.093-77.495-26.246l-4.247-1.812c-30.992-13.137-60.14-29.028-86.265-46.817 28.867 24.805 68.476 51.844 119.984 72.575 8.121 3.308 14.438 6.402 20.543 9.398 11.309 5.555 21.094 10.356 38.883 14.535l2.61.617 1.195 2.395c2.109 4.25 17.746 91.117 17.91 91.976l1.8 9.762c.536 1.559-11.269-4.558-11.148-4.476-1.492-1.079-11.32-6.254-22.691-12.25-71.73-37.782-262.27-138.118-335.328-224.918-8.528-10.637-16.446-22.871-23.598-36.328 10.098 21.832 23.691 44.312 41.934 65.89 42.89 51.024 108.675 89.653 172.296 127l22.735 16.11-22.238-2.985c-107.301-18.5-201.418-45.996-281.079-82.043 31.004 16.203 73.786 34.406 133.43 52.746l14.465 4.45-14.305 6.425c-10.164 3.457-19.672 6.078-28.261 7.813a309.816 309.816 0 0 1-21.782 3.578c18.11-.578 35.926-2.73 53.082-6.402 2.567-.551 19.493-7.594 21.16-8.375 51.188 15.312 113.125 31.285 189.344 48.816l.942.219.82.523c11.066 6.965 20.8 13.43 29.766 19.734l12.668 8.915-15.422 1.453c-15.086 1.414-30.09 5.379-44.57 11.777-7.395 3.27-14.344 7.719-21.7 12.41-5.605 3.59-11.414 7.301-17.668 10.637-29.027 15.433-61 21.2-84.367 25.41-13.16 2.352-26.809 4.14-40.547 5.336h.414c25.145 0 50.203-2.324 74.38-6.895l.429-.109 19.508-3-14.989 13.191c-17.992 13.512-37.82 27.508-60.074 37.551 11.844-3.992 25.734-9.746 41.867-17.949 9.602-4.894 19.63-10.297 29.324-15.516 41.614-22.41 84.622-45.59 122.551-45.59 26.485 0 48.078 11.669 64.172 34.672 15.715 22.43 19.48 51.602 20.934 71.594 6.64 91.09-9.387 197.547-58.89 242.414 10.823.965 24.687 8.227 35.241 8.227 2.903 0 15.016 5.781 17.196 5.648 46.597-3.214 84.191-9.32 129.996-11.441-8.739-26.836-36.22-123.652-27.828-185.809 14.168-104.71 93.453-116.824 151.87-116.824 6.348 0 13.016.148 20.934.43l2.34.082 1.602 1.695c8.402 8.832 16.695 16.457 24.644 22.652 13.684 10.637 28.07 19.348 41.973 26.434-8.7-6.05-16.227-11.695-22.211-16.2-7.18-5.378-14.977-12.866-24.508-23.53l-9.441-10.555 14.117 1.05c5.191.391 10.46.805 15.824 1.223 16.836 1.344 34.23 2.73 52.879 3.387 9.023.379 17.75.566 25.938.566 11.695 0 22.023-.375 31.136-1.035-35.21-.027-72.883-6.36-109.304-12.504-25.172-4.234-51.2-8.617-75.641-10.742l-20.719-1.8 18.727-9.036a258.538 258.538 0 0 0 21.875-11.926c-18.082 8.067-34.192 13.016-45.684 15.934-12.035 2.984-36.597 7.754-45.847 9.559-1.438.28-3.188.629-3.188.629-38.426 8.175-62.492 25.007-75.91 37.687l-7.406 7.004-2.57-12.14c-3.426-16.173-6.4-30.141-2.716-40.684 14.387-41.344 78.383-99.95 119.23-128.36l2.071-1.437 16.469 3.726c72.453 16.414 162.629 36.836 231.387 36.836 4.058-.027 8.066-.105 12.004-.242-59.235-2.808-145.043-19.32-234.504-45.375l-12.61-3.672 11.293-6.722c46.344-27.614 96.172-46.18 153.864-67.692M435.25 32.457c-.027.148-39.781 53.754 19.496 94.059-.015.164 40.332-51.41-19.496-94.059M21.941 462.395c.043.203-4.68 43.253 51.211 39.933.055.227 5.66-43.86-51.21-39.933m59.32-44.231c.027.133-2.422 34.524 42.402 31.367.043.145 3.309-34.758-42.402-31.367M488.84 48.578s-27.977 25.465-1.45 54.277c-.015 0 27.965-24.015 1.45-54.277m19.105-16.324c-.011.027-7.472 19.992 15.032 34.031 1.44-6.441 7.543-19.55-15.032-34.031m159.309-9.316c-.027-.188-56.617 35.105-17.613 96.238-.012-.203 56.187-32.293 17.613-96.239m59.613-10.351c-.024.027-39.39 48.16 20.64 97.098-.042.027 39.946-45.391-20.64-97.098M394.715 102.52c0 .28-28.934 58.039 38.547 87.054 0 .281 29.926-56.55-38.547-87.054m125.547-10.34c-.04-.285-64.63 27.105-43.602 92.632-.027-.253 63.528-24.628 43.602-92.632m52.476 11.883c-.027-.16-47.933 18.57-32.418 67.683-.012-.148 47.125-16.875 32.418-67.684m124.407 13.379c-.016-.175-48 15.407-32.622 65.532-.012-.164 47.168-13.864 32.622-65.532M568.246 18.395c-.027-.188-48.012 18.753-32.469 67.8-.012-.175 47.203-17.047 32.47-67.8" />
    <path fill={MainIconColor}
    d="M607.531 192.625c0-.203-51.21 6.293-50.902 58 0-.172 49.937-5.309 50.902-58m101.579-47.973c-.017.043-22.993 31.961 19.09 56.953-.013.043 23.476-30.52-19.09-56.953m-537.93 67.133c.027.16-9.547 38.332 37.726 38.074.028.16 10.367-38.238-37.726-38.074m420.972 47.742c0-.148-43.98 3.496-41.328 47.032 0-.122 42.953-2.598 41.328-47.032M798.395 90.902c0-.164-44.098-1.386-41.665 42.297 0-.133 43.09 1.961 41.665-42.297M643.832 262.969c0-.082-35.531 4.37-30.29 39.594 0-.079 34.794-3.52 30.29-39.594m.313-73.489c0 .094-1.829-31.746-42.301-30.039 0 .11.89 30.524 42.3 30.04m7.985 37.979c0 .083-1.586-27.667-36.867-26.39 0 .067.77 26.672 36.867 26.39m13.312 21.86c0 .043-9.105-20.742-35.468-12.097 0 .039 8.28 20.097 35.468 12.097m30.84 48.567c0 .066-12.125-27.914-47.34-16.7 0 .079 11.055 26.915 47.34 16.7m-77.187-71.004c-.012-.067-33.031 12.664-17.598 45.297-.012-.07 32.59-11.512 17.598-45.297m91.937-130.535c-.012.066-14.398 28.086 22.492 44.515-.012.055 14.965-27.05-22.492-44.515M595.957.875c0 .066-14.36 28.988 22.68 43.25-.012.07 14.926-28.07-22.68-43.25m-213.019 52.07c0 .094-14.133 30.399 22.695 40.242 0 .083 14.668-29.644-22.695-40.242M577.563 374.95c0 .027 26.917-31.231-11.883-57.407-.016.023-27.16 30.008 11.883 57.406m60.476-225.589c0 .132 8.242-38.305-40.578-46.505-.012.122-9.129 36.77 40.578 46.504m-20.195 195.719c0-.098 38.183-1.871 36.234-39.625 0-.094-37.375.77-36.234 39.625M468.055 521.46c0-.081 37.93-4.144 35.87-41.76-.01-.067-37.148 3.12-35.87 41.76m82.902-320.003c-.016-.105 38.277-3.078 36.273-40.789-.012-.11-37.496 2.004-36.273 40.789m22.789-110.191c0-.121 38.399-2.676 36.41-40.403 0-.12-37.593 1.559-36.41 40.403M544.004 376.98c-.012.11-18.027 38.09 29.754 55.204 0 .097 18.77-36.957-29.754-55.204M494.61 226.762c-.012.11-18.032 38.48 29.902 54.343 0 .11 18.77-37.457-29.903-54.343m9.075-39.77c0 .094-10.461 33.18 31.433 41.973 0 .098 11.215-32.496-31.433-41.973m187.609 7.031c-.012.082-18.23 36.813 29.7 57.18-.013.082 18.984-35.52-29.7-57.18m7.961 328.645c-.016.027-22.79 32.418 18.93 56.59-.012.027 23.261-31.004-18.93-56.59m15.879-34.055c0 .028-14.281 28.301 22.277 44.14-.016.04 14.828-27.265-22.277-44.14m-33.52 83.735c-.012.066-18.07 37.175 29.446 56.672-.016.066 18.808-35.86-29.446-56.672m-.633 57.343c0 .067-18.027 37.215 29.418 56.602-.012.055 18.786-35.898-29.418-56.602m-31.968-210.386c0-.133-46.172-4.008-51.723 41.976 0-.12 44.89 4.531 51.723-41.976m-33.157-28.153c.012-.093 42.887 11.078 57.692-30.843.012-.094-41.598-12.516-57.692 30.843m124.997-89.488c.016-.094 42.78 13.832 58.109-26.77.012-.081-41.45-15.355-58.11 26.77m15.477-43.844c.012-.12 44.543 7.016 50.352-36.047.012-.12-43.403-8.496-50.352 36.047m1.774-48.617c0-.121 44.328 8.887 52.394-33.625.012-.137-43.144-10.422-52.394 33.625m3.628-42.512c.016-.136 44.372 9.086 52.45-33.386.016-.121-43.172-10.633-52.45 33.386m166.274-97.382c-.012-.16-41.57 20.558-11.766 69.441 0-.16 41.239-18.66 11.766-69.441M883.918 346.61c.016.038-35.535-30.32-74.094-1.493 0 .067 33.906 28.758 74.094 1.492m-28.84 30.762c.027 0-39.984-24.656-72.05 10.406.015.028 38.37 23.489 72.05-10.406m-50.281 34.649c.012-.028-41.613-21.258-70.602 16.683.016-.012 39.973 20.383 70.602-16.683m61.793-256.098c0-.094-33.75 20.61-2.488 57.582-.016-.078 33.664-19.012 2.488-57.582m98.066-3.199c.012-.082-39.097-16.028-51.656 20.449.012-.07 37.926 15.582 51.656-20.45m-78.558-39.046c0-.028-24.11 19.777 5.308 47.554-.012-.027 24.23-18.445-5.308-47.554m87.781 220.765c0-.082-29.5 12.68-7.719 44.934 0-.082 29.285-11.496 7.719-44.934m28.625-24.886c0-.082-29.445 12.074-7.719 44.597 0-.082 29.254-10.906 7.719-44.597" />
    <g clip-path="url(#b)" transform="translate(-483.602 -309.191)">
    <path fill={MainIconColor}
    d="M1174.531 309.18s-23.582 21.902 5.418 46.398c-.012-.015 23.719-20.652-5.418-46.398" />
    </g>
    <path fill={MainIconColor}
    d="M1084.719 196.484c.012-.148-39.313 1.278-26.274 42.528.016-.149 38.68-.5 26.274-42.528m23.609 212.723c0-.05-23.074 16.836 4.906 45.121 0-.066 23.164-15.555-4.906-45.121m117.535 56.523c.024-.054-33.574-11.496-37.715 19.805.012-.039 32.766 11.348 37.715-19.805m-34.945-141.52c.039-.12-40.066-12.206-42.324 26.044.027-.094 39.152 12.004 42.324-26.043m-39.313-59.695c.027-.137-38.574-4.95-32.414 34.027.023-.133 37.82 5.285 32.414-34.027m59.508 238.226c.012 0-31.113-18.836-46.387 7.692.016.015 30.157 18.218 46.387-7.692m-56.375-46.586c.012-.105-31.554 3.887-17.707 37.418.012-.105 31.113-3.105 17.707-37.418m-121.113-300.183c0-.067-25.45 14.71.351 45.015 0-.054 25.438-13.445-.351-45.015m-62.437-47.258c.016-.106-34.282-1.598-28.797 32.941.012-.093 33.613 2.11 28.797-32.941m147.933 374.492c.016-.094-31.648 4.695-17.758 38.133.012-.094 31.219-3.903 17.758-38.133m49.359 82.941c-.016.094-20.101-27.68-51.214-14.453 0 .082 19.054 26.742 51.214 14.453m-27.28 26.219c0 .094-12.68-29.605-48.442-23.972 0 .109 11.683 28.652 48.441 23.972m-57.437 48.523c-.012.079-12.758-29.472-48.64-22.519 0 .078 11.722 28.57 48.64 22.52m55.785 9.019c-.016.082-12.68-29.43-48.43-23.367-.012.094 11.672 28.531 48.43 23.367m51.383-70.61c.016-.07-33.852-6.359-33.196 26.458.016-.067 33.102 6.508 33.196-26.457m8.484 55.336c0 .054-25.344-24.43-50.953-5 0 .066 24.281 23.593 50.953 5m-6.746-101.106c.012.028-28.426-22.21-49.531.742 0 .04 27.398 21.446 49.53-.742m-204.429 24.996c0 .067-18.433-27.816-51.386-13.78 0 .081 17.328 26.94 51.386 13.78m36.34-10.394c0 .066-18.312-28.031-51.277-14.696 0 .082 17.222 27.122 51.277 14.696m29.523-18.215c0 .066-16.562-25.574-46.421-14.066 0 .082 15.593 24.765 46.422 14.066m11.589-27.968c0 .015-19.007-14.802-34.215 1.198.012.012 18.258 14.48 34.215-1.199m-79.82-41.867c0-.133-38.652 11.953-16.82 52.934 0-.133 38.21-10.676 16.82-52.934m32.215-10.312c0-.094-31.14 9.601-12.828 42.945 0-.082 30.8-8.578 12.828-42.945M945.2 473.61c0-.083-31.247 10.85-12.825 43.87 0-.082 30.922-9.789 12.824-43.87M811.84 243.77c-.012-.028-24.078 21.12 5.379 47.593-.012-.027 24.215-19.832-5.38-47.593m-64.183 69.335c-.016-.015-24.054 22.047 5.446 47.606 0-.012 24.187-20.785-5.446-47.606m83.856-119.136c-.016-.04-30.938 27.226 7.582 61.726-.016-.039 31.11-25.476-7.582-61.726M843.3 308.79c.017.01 36.235 26.163 65.95-5.056.012.028-34.61-27.562-65.95 5.055m-88.546 206.742c.012-.215 59.156-9.91 43.184-69.468.016-.231-58.231 8.078-43.184 69.468m258.988-161.203c.04-.176 59.508 19.68 71.985-34.488.054-.16-57.708-22.387-71.985 34.488m46.696-53.551c.05-.312 59.652 6.063 51.343-53.082.04-.308-58.472-8.324-51.344 53.082m-22.91 185.942c.027-.27 57.598-5.082 38.614-64.387.039-.27-56.75 3.133-38.614 64.387m94.411-35.992c.022-.16 42.324-1.465 28.394-45.352.027-.16-41.68.11-28.395 45.352m-76.355-35.117c.016-.165 42.621-2.962 28.586-47.06.012-.16-42.004 1.614-28.586 47.06m132.891 37.413c.039-.293 50.363-9.14 21.562-65.113.043-.293-49.945 7.637-21.562 65.113M985.348 214.902c0-.187 45.375-22.652 5.16-75.02 0-.19-45.32 21.415-5.16 75.02M772.77 80.36c0-.16 42.566-6.575 29.82-49.544.016-.16-41.906 5.352-29.82 49.543m113.355 21.985c-.027.039 20.582-30.91-22.965-57.438-.016.04-21.082 29.766 22.965 57.438m28.609 205.691c.04-.187 59.965 17.317 72.496-38.36.04-.187-58.23-19.937-72.496 38.36m-49.558-37.914c0 .012 33.547 24.672 61.082-3.832.012.027-32.055-25.894-61.082 3.832m23.355-34.098c.012-.023 36.715 21.07 58.418-10.968.012 0-35.293-22.426-58.418 10.968m103.617-16.563c.016-.148-40.386-.401-32.226 40.58.016-.138 39.61 1.034 32.226-40.58m101.953 141.993c.04-.285 58.82 7.192 50.028-50.797.055-.293-57.649-9.398-50.027 50.797" />
    <path fill={MainIconColor}
    d="M1109.75 397.16c.043-.133 56.402 21.027 66.715-29.738.055-.133-54.68-23.543-66.715 29.738M906.145 202.2c.012-.028 36.714 21.495 58.402-10.153.016-.012-35.266-22.871-58.402 10.152M802.39 517.293c0-.055-34.851-7.316-41.976 26.914.012-.04 33.84 7.57 41.977-26.914m-54.453 96.695c.012-.07 40.937 9.785 51.882-29.941.016-.082-39.77-11.082-51.882 29.941m1.667 32.239c.012-.04 40.2 15.609 58.7-22.922 0-.028-38.871-16.875-58.7 22.922" />
    <path fill={MainIconColor}
    d="M753.125 576.191c.016-.05 35.078 8.38 44.262-25.652.016-.05-34.055-9.41-44.262 25.652M959.383 323.7c.016-.04-31.93-16.782-47.875 12.476.012-.028 30.855 16.347 47.875-12.477m-55.485 46.938c.012 0 31.258 18.215 50.364-9.305.012 0-30.035-19.187-50.364 9.305m84.567 12.125c.016 0 31.097 19.215 50.11-7.18.015.016-29.833-20.195-50.11 7.18m-14.52 24.093c.012.028 28.664 21.93 52.086-1.601 0 .027-27.375-22.79-52.086 1.601m-17.504 29.176c.012.028 28.692 21.633 52.11-2.273.016.027-27.387-22.465-52.11 2.273m-125.816-24.683c0 .066-1.254 30.828 38.598 36.18-.012.077 2.218-30.2-38.598-36.18m-4.051 37.16c-.012.105-1.476 36.625 45.836 42.82-.016.11 2.633-35.91-45.836-42.82m67.376-39.246c.011-.04 34.015 12.383 45.484-19.16.012-.04-32.942-13.457-45.485 19.16M0 515.543c.082.336-.54 56.023 75.371 46.762.082.375 1.856-57.934-75.371-46.762M190.031 250.95c-.015.093-47.812 48.292-4.867 91.073-.016.094 47.809-45.726 4.867-91.074m838.649-39.246c0-.254-48.887 28.008-6.414 88.64 0-.265 48.656-25.382 6.414-88.64M838.973 69.012c-.027-.188-49.45 33.101-6.2 91.304-.012-.187 49.262-30.398 6.2-91.304m-550.782 78.117s-28.785 25.867-5.687 52.945c-.016 0 28.676-24.457 5.687-52.945m.793-26.379c.012.121-5.902 32.965 35.172 36.488.012.133 6.696-32.699-35.172-36.488m50.539-40.684c-.015.188-36.328 53.079 20.852 87.176 0 .188 36.906-51.117-20.852-87.176M51.05 378.379c.055.176 7.934 41.558 67.68 25.492.055.215-6.695-43.078-67.68-25.492m226.934 70.559c.028.175-2.148 44.355 55.207 45.457.028.187 3.387-44.489-55.207-45.457m-42.363-290.653c-.012.203-42.902 54.977 11.766 92.719-.016.2 43.277-52.692-11.766-92.719M10.191 591.508c.055.094 22.387 47.648 97.141 17.867.078.16-20.746-50.54-97.14-17.867m86.706-92.985c.04.364-26.906 58.54 39.649 78.825.027.351 27.789-57.918-39.649-78.825m218.598 41.801c.016.078 9.95 35.696 57.719 21.7.015.093-8.684-36.153-57.719-21.7m7.945-268.133c-.011.016-35.156 30.024-3.59 60.461-.011.016 35.122-28.382 3.59-60.46M290.934 615.41c.027.082-14.063-41.57-69.067-20.219.027.094 12.301 39.704 69.067 20.22m6.359-372.274c-.016 0-30.629 24.699-5.621 51.062-.012 0 30.52-23.324 5.621-51.062m62.465-38.047c.027.094-14.145-34.758-60.813-13.809.028.106 12.614 33.114 60.813 13.809m24.898 41.383c.016.093-14.144-35.051-60.863-14.899.027.11 12.61 33.453 60.863 14.899m26.059 30.882c.012.04-9.899-24.726-42.73-11.375.015.04 8.863 23.852 42.73 11.375m30.988-14.535c-.012 0 23.086-19.86.43-40.98-.012 0-23.07 19.027-.43 40.98m37.887 165.2c0 .011 23.047-19.297.457-41.036 0 0-23.031 18.434-.457 41.036m391.719 99.867c0 .039 4.796-26.153-29.204-34.043 0 .027-5.417 25.277 29.204 34.043M440.613 305.79c0 .042-9.879-24.927-42.754-12.126 0 .055 8.848 24.078 42.754 12.125m-42.16-93.695c0 .011 19.106-20.614-4.383-37.04-.015.012-19.187 19.79 4.383 37.04m24.672 113.285c0 .015 13.71 20.516 41.906 5.176.012.043-12.758-20.89-41.906-5.176m-7.262-88.829c-.015-.015 24.133-15.57 7.477-37.956-.016-.012-23.961 14.789-7.477 37.957M235.164 389.688c-.027-.043-38.305 20.96-20.57 55.527-.028-.043 37.82-19.363 20.57-55.527m18.852 36.73c-.016-.04-38.332 20.45-20.598 55.367-.027-.043 37.86-18.879 20.598-55.367m7.636 42.942c0 .015-27.523 21.581-5.5 45.593 0 .012 27.414-20.371 5.5-45.594M142.746 632.031c.012-.015-17.574-21.824-49.965 1.29.016-.012 16.285 21.23 49.965-1.29m87.457 36.153c.012-.016-17.668-22.91-50.285-.903.016 0 16.39 22.293 50.285.903M173.8 608.582c0 .066 14.536-29.11-19.491-37.605.011.082-14.993 27.98 19.492 37.605m35.48 14.789c0 .066 14.59-29-19.535-38.184.016.082-15.031 27.887 19.535 38.184m10.004-84.433c.016.039-16.066-31.06-59.195-7.825.023.04 14.531 29.82 59.195 7.824m.485-187.984c-.012-.027-32.028 19.211-15.543 47.606-.012-.028 31.675-17.868 15.543-47.606M331.027 638.98c.012 0-17.761-22.062-48.39-1.14.015 0 16.578 21.512 48.39 1.14m-3.187 210.172c.012 0-17.707-22.402-48.227-2.261.012-.012 16.535 21.941 48.227 2.261M97.367 464.32c.016.067 4.664 28.649 43.871 16.309.028.094-3.765-29.07-43.87-16.309" />
    <path fill={MainIconColor}
    d="M286.055 204.941c-.016-.054-34.434 18.512-18.84 49.72-.012-.056 34.004-17.118 18.84-49.72M509.64 648.23s-27.413-25.855-61.886 3.215c0 0 25.894 25.207 61.887-3.215m-170.293 49.907c-.012 0-31.164 20.718-8.899 49.761 0 .012 30.961-19.414 8.899-49.761m34.39 9.965s-24.05 15.714-6.883 38.382c-.011 0 23.891-14.734 6.883-38.382M607.41 496.426c-.012-.055-34.765 13-19.277 47.511-.016-.066 34.297-11.816 19.277-47.511m-314.957 11.64c.012.043 12.692 27.094 50.016 10.747.011.039-11.606-27.551-50.016-10.747m63.969 73.762c.015.05 16.836 35.723 65.183 15.836.012.082-15.394-36.422-65.183-15.836m44.812 37.727c.016.023 23.164 33.058 68.192 7.918.015.054-21.645-33.895-68.192-7.918m111.391-11.418c-.012.015 31.367-28.864-3.32-59.063-.012.028-31.422 27.645 3.32 59.063m-48.441-22.707c-.012.054 27.683-32.414-11.079-57.934 0 .04-27.898 31.125 11.079 57.934m-44.02-30.305c0 .04 25.91-28.813-7.906-52.191-.012.05-26.055 27.656 7.906 52.191m-41.73-29.672c0 .055 24.199-30.265-11.106-51.09 0 .051-24.43 29.078 11.106 51.09m68.324-111.687c-.012.039 31.515-34.93-9.653-63.364 0 .051-31.687 33.57 9.653 63.364m-51.25-30.306c-.016.028 33.894-31.405-1.613-61.75 0 .024-33.883 30.157 1.613 61.75m-41.641-28.636c-.012 0 33.95-26.258 5.836-56.75-.012 0-33.785 25.168-5.836 56.75M1144.36 663.3c-.017.165 14.722 40.887-36.356 42.716-.012.164-15.527-40.657 36.355-42.715m44.836-5.754c-.012.121 14.078 34.379-28.07 36.625-.016.121-14.695-34.07 28.07-36.625m36.195-17.129c0 .11 22.145 32.687-13.93 42.902-.011.121-22.48-31.93 13.93-42.902M932.695 684.95c-.012.148-6.574-44.786 50.946-40.106-.016.148 7.77 42.902-50.946 40.105m68.582 14.535c-.027.16-11.574-43 42.297-42.609-.012.164 12.574 41.195-42.297 42.61m58.946 4.527c0 .148-15.41-38.856 31.82-42.567-.012.137 16.148 37.297-31.82 42.567M396.719 486.637c.011-.067 39.77 24.175 75.84-17.157.015-.05-38.157-25.746-75.84 17.157m-53.188-25.747c0-.081 39.7 23.098 75.692-18.956.015-.067-38.13-24.727-75.692 18.957M181.723 565.625c.011 0 20.648 30.695 65.5 4.316.027.028-19.305-31.757-65.5-4.316m-57.547 89.57c.015-.066 28.465 24.348 67.226-9.21.012-.04-27.105-25.477-67.226 9.21M1.195 649.832c0-.094 28.114 22.074 66.473-12.828 0-.082-26.836-23.328-66.473 12.828m311.707-220.469c.012-.054 30.387 17.086 57.868-15.652 0-.04-29.165-18.164-57.868 15.652m-42.836-34.554c.016-.012 24.122 24.187 60.598-3.965.012 0-22.86-25.266-60.598 3.965m-63.742 371.507c.016.11-6.855 39.153 42.77 40.848.011.105 7.824-38.91-42.77-40.848m188.59 29.082c0 .067 7.168-33.343-34.23-37.66.015.082-7.946 32.106 34.23 37.66m-166.043 32.899c.016-.055-26.176-19.227-55.016 9.871 0-.055 24.805 19.035 55.016-9.871m231.574-61.012c-.011.04 14.805-24.469-14.992-37.93 0 .043-15.137 23.543 14.992 37.93m-107.961 37.109c0 .094 8.309-38.359-39.234-42.703 0 .094-9.207 36.852 39.234 42.703m-49.519 4.934c0 .106 8-37.258-38.168-40.71.012.093-8.887 35.76 38.168 40.71m99.828-67.547c0 .066-9.047 31.461 30.184 38.559 0 .066 9.789-30.828-30.184-38.559M147.195 482.227c.028.12 3.817 39.257 56.47 26.863.026.133-2.65-39.918-56.47-26.863m-9.574-39.527c.027.12 5.043 36.53 54.559 22.827.027.121-3.926-37.199-54.559-22.828m-5.605-41.059c.011.094 4.53 32.79 49.02 19.91.026.122-3.524-33.316-49.02-19.91m14.129-52.128c.015.07-8.47 27.363 24.738 28.933.015.094 9.023-27.035-24.738-28.933M30.91 436.89c.012.028 8.281 22.63 41.356 6.59.015.028-7.461-23.168-41.356-6.59m208.703-71.214c0-.028 24.082 23.633 60.489-5.086.015 0-22.84-24.762-60.489 5.086m-19.078-45.446c.016.082 9.992 31.555 53.809 14.965.027.094-8.875-32.27-53.809-14.965m-132.969-7.757c.04.27-19.91 49.007 37.766 54.988.043.285 20.734-48.723-37.766-54.988m45.809-54.868c.012.133-28.867 39.313 12.758 57.946 0 .136 29.203-38.063-12.758-57.946m81.703 24.454c.012.07 4.813 26.476 40.656 15.707.016.066-3.937-26.786-40.656-15.707m696.43 500.175c-.016.027 10.246-25.488 50.66-10.836 0 .027-9.023 24.66-50.66 10.836m31.004 31.676c0 .07-.258-27.734 41.988-25.18-.016.066 1.25 26.622-41.988 25.18m42.054 7.035c0 .066-6.304-27.59 34.743-31.785 0 .082 7.14 26.39-34.743 31.785m43.641 3.855c-.012.083-10.793-26.847 28.29-35.921 0 .094 11.456 25.637-28.29 35.922m42.516-5.551c0 .094-7.317-27.309 33.207-31.504-.012.098 8.109 26.098-33.207 31.504m41.031 3.668c-.027.121-3.629-33.774 47.742-31.555-.027.137 4.8 32.11-47.742 31.555m-101.856 84.246c0-.133 39.97-21.187 79.875 28.262-.016-.133-37.93 21.418-79.875-28.262M875.703 773.012c.016.055-16.363-31.18 19.238-54.356.016.078 16.793 29.738-19.238 54.356m-32.187 19.105c0 .027-23.946-24.226 2.742-59.64 0 .027 23.988 22.87-2.742 59.64m152.652-24.59c.016-.094-45.05.309-42.672-45.808.012-.106 44.125-1.14 42.672 45.808m56.282 4.61c.026-.094-44.934-.524-42.513-46.223.012-.105 44.004-.254 42.512 46.223" />
    <g clip-path="url(#c)" transform="translate(-483.602 -309.191)">
    <path fill={MainIconColor}
    d="M1765.46 958.617c-.026.164 13.552 38.184-37.913 33.156-.027.176-14.348-38.343 37.914-33.156" />
    </g>
    <path fill={MainIconColor}
    d="M1271.184 580.145c-.055.257 6.777 50.77-63.313 32.109-.066.266-7.973-52.102 63.313-32.11m-174.715 189.051c.012-.055-34.313-1.008-32.442-35.629.012-.082 33.582.364 32.442 35.63m55.836-11.122c0-.094-34.875 6.211-43.184-28.527.012-.098 33.934-6.817 43.184 28.527m43.155-6.344c.017-.094-34.753 5.497-43.034-29.082.012-.094 33.812-6.09 43.035 29.082m45.527-20.894c.012-.11-29.312 15.863-51.87-13.55 0-.095 28.233-16.524 51.87 13.55M1048.887 880.14c.012-.065-36.125 5.485-40.86-29.617 0-.082 35.227-6.066 40.86 29.618m-36.731 58.649c.012-.07-37.27 1.464-36.168-33.548 0-.055 36.465-2.082 36.168 33.547m-54.894-10.891c0-.027-36.614-10.273-20.989-41.773 0-.027 36.125 9.492 20.989 41.773m-47.192-19.562c.012.027-31.273-20.492-3.683-44.652 0 .027 31.164 19.562 3.683 44.652m-47.933-21.461c0 .055-17.047-30.785 21.406-39.352 0 .067 17.52 29.715-21.406 39.352m144.398-11.008c0-.098-36.191 5.942-40.965-29.34.012-.067 35.293-6.547 40.965 29.34m87.055-1.305c.016-.082-36.043 4.907-40.766-29.996.016-.094 35.16-5.484 40.766 29.996m48.886-20.355c0-.094-31.785 15.566-51.628-14.36 0-.081 30.668-16.12 51.629 14.36m128.464-144.559c0-.07-21.726 14.223-42.379-7.972 0-.055 20.84-14.739 42.38 7.972M16.133 679.086c.015-.121 35.265 37.297 95.566-7.555.028-.082-33.57-39.636-95.566 7.555M119.418 801.89c.012-.065 29.227 35.387 81.664.567.012-.039-27.602-36.719-81.664-.566m63 67.199c0-.082 33.465 31.203 79.406-5.93.016-.066-31.808-32.308-79.406 5.93M158.5 744.723c-.012-.118 42.637 1.992 53.715-41.368-.016-.12-41.492-2.957-53.715 41.368m120.816 2.824c-.011-.051 42.176-15.246 28.829-55.863-.016-.055-41.532 14.199-28.829 55.863m-61.011 9.129c-.028-.106 49.03-7.23 41.382-53.672-.027-.106-48.132 6.293-41.382 53.672m-106.133-34.324c0-.094 32.426 14.132 58.348-21.352 0-.078-31.22-15.031-58.348 21.352m-29.594-17.868c0-.055 23.984 13.391 47.594-13.808 0-.04-22.988-14.051-47.594 13.808m155.543 190.004c0-.043 24.188 15.903 48-9.937 0-.027-23.14-16.403-48 9.937m153.984 11.828c-.027-.012 39.73-19.062 18.946-57.851-.016-.027-39.301 17.922-18.946 57.851m61.942-19.64c-.016.012 38.117-29.688-1.211-61.82-.012.026-38.117 28.382 1.21 61.82m-120.171 24.605c0-.043 39.863-4.613 38.05-44.3 0-.056-39.019 3.695-38.05 44.3m-40.254.442c-.012-.04 31.961-1.157 34.164-33.13 0-.026-31.191.446-34.164 33.13" />
    </svg>
  )
}
export default MainIcon
