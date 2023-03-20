<template>
    <div class="custom-input no-border shadow date-picker-component" :class="datePickerClass" ref="datePickerComponentRef">
        <a-range-picker separator="to" v-if="range" 
            v-model="modelValue"
            ref="datePickerRef"
            dropdownClassName="date-picker-component-dropdown"
            :getCalendarContainer="() => ($refs.datePickerComponentRef)"
        >
            <template slot="dateRender" slot-scope="current">
                <div class="ant-calendar-date" :style="getCurrentStyle(current)">
                    {{ current.date() }}
                </div>
            </template>
        </a-range-picker>
        <a-date-picker v-else 
            :show-time="showTime"
            v-model="modelValue"
            ref="datePickerRef"
            dropdownClassName="date-picker-component-dropdown"
            :getCalendarContainer="() => ($refs.datePickerComponentRef)"
        >
            <template slot="dateRender" slot-scope="current, today">
                <div class="ant-calendar-date" :style="getCurrentStyle(current, today)">
                    {{ current.date() }}
                </div>
            </template>
        </a-date-picker>
    </div>
</template>

<script>
import moment from "moment";

export default {
    props: {
        range: {
            type: Boolean,
            default: false
        },
        value: {
            type: Object | String,
            default: null
        },
        format: {
            type: String,
            default: "YYYY-MM-DD"
        },
        showTime: {
            type: Object | Boolean,
            default: false
        }
    },
    data() {
        return {
            dropdownTop: 0
        }
    },
    computed: {
        datePickerClass() {
            return {
                "range": this.range
            }
        },
        isStringValue() {
            return !!(typeof this.value === "string");
        },
        isArrayStringValue() {
            return !!(Array.isArray(this.value) && typeof this.value[0] == "string");
        },
        modelValue: {
            get() {
                if(this.value && this.isStringValue) {
                    return moment(this.value, this.format);
                }
                if(this.value && this.isArrayStringValue) {
                    return this.value.map((date) => moment(date, this.format));
                }
                return this.value;
            },
            set(newValue) {
                let result = newValue;
                if(newValue && this.isStringValue) {
                    result = newValue.format(this.format);
                }
                if(newValue && this.isArrayStringValue) {
                    result = newValue.map((date) => moment(date).format(this.format));
                }
                this.$emit("input", result);
            }
        }
    },
    methods: {
        getCurrentStyle(current, today) {
            const style = {};
            if (current.date() === 1) {
                style.border = '1px solid #1890ff';
                style.borderRadius = '50%';
            }
            return style;
        }
    }
};
</script>

<style lang="scss">
.date-picker-component {
    --date-picker-input-height: 40px;
    --paddingX: 12px;
    --paddingY: 10px;
    
    * {
        font-size: var(--text-sm);
        color: #131313;
    }

    position: relative;
    max-width: 160px;
    margin-bottom: 0;
    
    &.range {
        max-width: 228px;
    }
    
    .ant-calendar-picker {
        position: relative;
        .ant-input {
            --translateY: -1px;
            height: var(--date-picker-input-height);
            padding: var(--paddingY) var(--paddingX);
            padding-left: 40px;
            border-radius: 8px;
            input {
                padding: 0;
                width: calc(50% - 11px);
                max-width: 78px;
                height: auto;
                min-height: unset;
                text-align: left;
                transform: translateY(var(--translateY));
                box-shadow: none !important;
            }
            .ant-calendar-range-picker-separator {
                padding: 0 3px;
                transform: translateY(var(--translateY));
            }
        }

        &::after {
            content: "";
            position: absolute;
            top: 50%;
            left: 12px;
            transform: translateY(-50%);
            width: 20px;
            height: 20px;
            background: url("@/assets/images/icon/calendar.svg");
            pointer-events: none;
        }
        
        .anticon-close-circle {
            display: block;
        }

        .ant-calendar-picker-icon {
            display: none;
        }

        & + div {
            top: 52px !important;
        }
    }
}

.date-picker-component-dropdown {
    // --date-picker-active-color: #131313;
    --date-picker-active-color: var(--color-secondary);
    --date-picker-color-opacity: 0.1;

    box-shadow: 1px 1px 16px #BBBBBB;
    border-radius: 8px;
    top: 0 !important;
    * {
        color: #131313;
    }
    &.ant-calendar-picker-container {
        .ant-calendar {
            border-radius: 8px;
            width: 348px;
            .ant-calendar-date-panel {
                padding: 0px 16px 6px;
                border: 1px solid #E1E1E1;
            }
            &.ant-calendar-range {
                width: 678px;
                .ant-calendar-date-panel {
                    padding: 0px;
                    border: none;
                }
            }
        }
        a:hover {
            color: var(--date-picker-active-color);
        }
        .ant-calendar-time {
            .ant-calendar-time-picker {
                width: calc(100% - 32px);
            }
        }
        .ant-calendar-footer {
            margin-top: 6px;
            padding: 6px 0 0;
            .ant-calendar-ok-btn {
                border-radius: 0;
                background: var(--date-picker-active-color);
                border-color: var(--date-picker-active-color);
                color: #FFFFFF !important;
            }
        }
        .ant-calendar-panel {
            padding: 18px;
            .ant-calendar-range-part {
                padding: 0 16px 6px;
                border: 1px solid #E1E1E1;
                width: calc(50% - 9px);
            }
            .ant-calendar-header {
                border-bottom: 1px solid #E1E1E1;
                .ant-calendar-month-panel,
                .ant-calendar-year-panel {
                    top: 0;
                }

                .ant-calendar-month-panel-selected-cell .ant-calendar-month-panel-month,
                .ant-calendar-year-panel-selected-cell .ant-calendar-year-panel-year {
                    background: var(--date-picker-active-color);
                    color: #FFFFFF !important;
                    &::before {
                        display: none;
                    }
                }

                .ant-calendar-my-select {
                    a {
                        &:hover {
                            color: var(--date-picker-active-color);
                            font-weight: 600;
                        }
                    }
                }
            }

            .ant-calendar-body {
                padding: 8px 0 0;
                margin-left: -9px;
                margin-right: -9px;
                border-top: none;
                .ant-calendar-table {
                    tr {
                        td:first-child {
                            .ant-calendar-date {
                                &::after {
                                    content: "";
                                    position: absolute;
                                    top: 0;
                                    left: -10px;
                                    width: 9px;
                                    height: 100%;
                                    background: #FFF;
                                }
                            }
                        }
                        td:last-child {
                            .ant-calendar-date {
                                &::after {
                                    content: "";
                                    position: absolute;
                                    top: 0;
                                    right: -10px;
                                    width: 9px;
                                    height: 100%;
                                    background: #FFF;
                                }
                            }
                        }
                    }
                }
            }

            .ant-calendar-column-header {
                .ant-calendar-column-header-inner {
                    font-weight: 700;
                }
            }
            .ant-calendar-date,
            .ant-calendar-month-panel-month,
            .ant-calendar-year-panel-year,
            .ant-calendar-time-picker-select li {
                font-weight: 600;
                border: none !important;
                border-radius: 0 !important;
                position: relative;
                &::before {
                    content: "";
                    position: absolute;
                    top: 0;
                    left: 0;
                    width: 100%;
                    height: 100%;
                    background: var(--date-picker-active-color);
                    opacity: var(--date-picker-color-opacity);
                    visibility: hidden;
                    transition: inherit;
                    pointer-events: none;
                }
                &:active,
                &.ant-calendar-time-picker-select-option-selected {
                    color: #FFFFFF;
                    background: var(--date-picker-active-color) !important;
                }
                &:hover {
                    background: transparent;
                    &::before {
                        visibility: visible;
                    }
                }
            }
            .ant-calendar-cell {                
                &.ant-calendar-today {
                    .ant-calendar-date {
                        border: 1px solid var(--date-picker-active-color) !important;
                        color: var(--date-picker-active-color);
                    }
                }
                &.ant-calendar-selected-day {
                    .ant-calendar-date {
                        background: var(--date-picker-active-color);
                        color: #FFFFFF;
                    }
                }
                &.ant-calendar-in-range-cell::before {
                    background: var(--date-picker-active-color);
                    opacity: var(--date-picker-color-opacity);
                }
            }
        }
        .ant-calendar-input-wrap,
        .ant-calendar-range-middle {
            display: none;
        }
    }
}
</style>