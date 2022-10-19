import { BaseEntity, Column, Entity, PrimaryGeneratedColumn } from "typeorm";
import { userType } from "./user.enum";

@Entity({ name: 'actv_client_users' })
export class UserEntity extends BaseEntity {
  @PrimaryGeneratedColumn({name: 'client_user_id'})
  id:number;

  @Column({name: 'client_id'})
  clientId:number;

  @Column({ name:'client_user_type'})
  userType: userType

  @Column({name: 'client_zone_id'})
  zoneId:number;

  @Column({name: 'client_user_first_name'})
  firstName:string

  @Column({name: 'client_user_last_name'})
  lastName:string

  @Column({name: 'client_user_email',nullable:true})
  email:string

  @Column({name: 'client_user_username'})
  username:string

  @Column({name: 'client_user_password'})
  password:string

  @Column({name: 'client_user_phone_number'})
  phoneNumber: string

  @Column({name: 'client_user_profie_image',nullable:true})
  profileImage: string

  @Column({name: 'client_user_token'})
  userToken: string

  @Column({name: 'client_user_last_login', type:"datetime"})
  lastLogin: Date

  @Column({name: 'client_user_date_added', type:"datetime"})
  dateAdded: Date

  @Column({name: 'client_user_date_updated', type:"datetime",nullable:true})
  dateUpdated: Date

  @Column({name: 'client_user_is_active'})
  isActive: boolean

  @Column({name: 'client_user_barcode_id'})
  barcodeId: string

  @Column({name: 'is_edit_allowed'})
  isEditAllowed: boolean

  @Column({name: 'edit_permission'})
  editPermission: boolean

  @Column({name: 'default_feed_view_id',nullable:true})
  defaultFeedViewId: number

  @Column({name: 'view_all_sub_view_id',nullable:true})
  viewAllSubViewId: number

  @Column({name: 'client_user_group_id'})
  clientUserGroupId: number

  @Column({name: 'client_user_timezone'})
  clientUserTimezone: number

  @Column({name: 'zone_location_setting'})
  zoneLocationSettings: boolean

  @Column({name: 'cost_per_hour',nullable:true})
  costPerHour: string

  @Column({name: 'search_preference'})
  searchPreference: string

  @Column({name: 'search_preference_live_screen'})
  searchPreferenceLiveScreen: string

  @Column({name: 'search_preference_live_pt',type:'text'})
  searchPreferenceLivePt: string

  @Column({name: 'is_production_order_name_display'})
  isProductionOrderNameDisplay: boolean

  @Column({name: 'is_send_to_live_once_all_task_done_setting'})
  isSendToLiveOnceAllTaskDoneSetting: boolean

  @Column({name: 'is_sort_products_by_end_date'})
  is_sort_products_by_end_date: boolean

  @Column({name: 'show_time_left_instead_of_zone_time'})
  show_time_left_instead_of_zone_time: boolean

  @Column({name: 'actv_user_analytics_selected_view'})
  actv_user_analytics_selected_view: number

  @Column({name: 'collapse_all_task_groups'})
  collapse_all_task_groups: boolean

  @Column({name: 'is_show_users_tagged_in_live_screen'})
  is_show_users_tagged_in_live_screen: boolean

  @Column({name: 'is_stay_on_completed_task'})
  is_stay_on_completed_task: boolean

  @Column({name: 'is_auto_collapse_all_views',nullable:true})
  is_auto_collapse_all_views: boolean

  @Column({name: 'show_timer_for_task_types',nullable:true})
  show_timer_for_task_types: boolean

  @Column({name: 'show_zone_time_target',nullable:true})
  show_zone_time_target: boolean

  @Column({name: 'hide_duplicate_task',nullable:true})
  hide_duplicate_task: boolean

  @Column({name: 'show_no_of_products_in_zone'})
  show_no_of_products_in_zone: boolean

  @Column({name: 'history_selected_date_range',nullable:true})
  history_selected_date_range: string

  @Column({name: 'client_user_timezone_abbr',nullable:true})
  client_user_timezone_abbr: string

  @Column({name: 'user_system_timezone_abbr',nullable:true})
  user_system_timezone_abbr: string

  @Column({name: 'move_to_next_form_feature',nullable:true})
  move_to_next_form_feature: boolean

  @Column({name: 'invert_zone_box_title',nullable:true})
  invert_zone_box_title: boolean

  @Column({name: 'live_all_products_export_filter_view_id',nullable:true})
  live_all_products_export_filter_view_id: number

  @Column({name: 'live_single_product_export_filter_view_id',nullable:true})
  live_single_product_export_filter_view_id: number

  @Column({name: 'history_product_export_filter_view_id',nullable:true})
  history_product_export_filter_view_id: number

  @Column({name: 'reporting_export_filter_view_id',nullable:true})
  reporting_export_filter_view_id: number

  @Column({name: 'gantt_filter_view_id',nullable:true})
  gantt_filter_view_id: number

  @Column({name: 'alert_filters',type:'text',nullable:true})
  alert_filters: string

  @Column({name: 'measurement',nullable:true})
  measurement: string

  @Column({name: 'start_selected_date_range',type:'text',nullable:true})
  start_selected_date_range: string

  @Column({name: 'start_selected_date_target',type:'text',nullable:true})
  start_selected_date_target: string

  @Column({name: 'hide_normal_task_icon',nullable:true})
  hide_normal_task_icon: boolean

  @Column({name: 'client_user_id_copy',nullable:true})
  client_user_id_copy: number

  @Column({name: 'user_2fa_enable',nullable:true})
  user_2fa_enable: number

  @Column({name: 'user_sid',nullable:true})
  user_sid: string

  @Column({name: 'user_entities',nullable:true})
  user_entities: string
}
