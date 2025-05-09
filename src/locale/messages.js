export default {
    // English
    en: {
        message: {
            // Page title
            'page_title': 'Bro wallet',
            'create_wallet_title': 'New Recovery Phrase',
            'create_wallet_confirm_title': 'Verify Your Recovery Phrase',
            'create_pin_title': 'Name your wallet',
            'wallet_created_title': 'Wallet created!',
            'wallet_title': 'Wallet page',
            'import_wallet_title': 'Import Existing Wallet',


            // Age modal
            'age_modal_text': 'Are you 18 years old?',


            // Index page
            'index_page_title': 'Сreation of a new wallet',


            // Create page
            'create_wallet_agree_label1': 'Do not share your recovery phrase with ANYONE.',
            'create_wallet_agree_label2': 'Back up the phrase safely.',

            'create_wallet_agree_checkbox1': "I understand that I have access to my wallet solely because I possess the recovery phrase. If this phrase falls into someone else's hands, I will lose my funds.",
            'create_wallet_agree_checkbox2': 'I also understand that if I lose my recovery phrase, I will lose all the funds in this wallet.',

            'create_wallet_derivation_path_label': 'Derivation path',


            // Confirm page
            'confirm_label': 'Word',
            'confirm_exp': 'Fill out the words according to their numbers to verify that you have stored your phrase safely.',


            // Create pin page
            'create_pin_wallet_name_label': 'Wallet name:',
            'create_pin_create_pin_label': 'Create pin:',
            'create_pin_confirm_pin_label': 'Repeat pin:',

            'create_pin_wallet_name_placeholder': 'Name',


            // Auth
            'auth_title': 'Welcome!',
            'auth_enter_pin_label': 'Enter pin:',
            'auth_error_warning': 'You have {count} attempts left',


            // User lock
            'user_lock_title': 'Account blocked!',
            'user_lock_desc': 'Your account has been blocked for {time} minutes due to multiple authorization errors. Unlocking will occur automatically after a period of time, you do not need to do anything for this.',
            'user_lock_timer_label': 'Time left:',


            // Mnemonic
            'mnemonic_tab1': '12 words',
            'mnemonic_tab2': '24 words',
            'mnemonic_tab3': 'Private Key',


            // Import page
            'import_wallet_exp': 'Enter your recovery phrase here to restore your wallet.<br> Or click on any blank and paste the entire phrase.',
            'import_wallet_exp2': 'Enter your private key here to restore your wallet.<br> Or click on any blank and paste the entire phrase.',


            // Account page
            'current_balance_title': 'Current balance',
            'stacked_balance_title': 'Total Staked',

            'available_tokens_title': 'Available Balance',
            'staked_tokens_title': 'Staked Balance',

            'staked_tokens_validator_label': 'By:',


            // Claim rewards
            'claim_rewards_page_title': 'Claimable Staking Reward',
            'claim_rewards_title': 'Claim Rewards',
            'claim_rewards_not_enought': 'You don’t have enough {denom} to pay Fee',


            // Claim confirm
            'calim_confirm_title': 'Confirm transction',


            // Stake
            'stake_page_title': 'Stake',
            'stake_confirm_page_title': 'Confirm',

            'stake_current_staked_label': 'Token:',
            'stake_APR_label': 'APR',
            'stake_validator_label': 'Select validator:',
            'stake_amount_label': 'Amount:',
            'stake_unbonding_period_label': 'Unbonding Period:',
            'stake_available_label': 'Available',
            'stake_staked_label': 'Total Staked',

            'stake_unbonding_time_unit': 'days',

            'stake_validator_placeholder': 'Choose your validator',

            'stake_confirm_voting_power': 'of voting power',
            'stake_confirm_token_label': 'Token:',
            'stake_confirm_amount_label': 'Amount:',
            'stake_confirm_daily_profit_label': 'Daily profit:',
            'stake_confirm_commission_label': 'Commission:',
            'stake_confirm_unbonding_period_label': 'Unbonding Period:',
            'stake_confirm_fee_label': 'Fee:',


            // Unstake
            'unstake_page_title': 'Unstake',
            'unstake_confirm_page_title': 'Confirm',


            // Unstaking tokens
            'unstaking_tokens_title': 'Unstaking process',
            'unstaking_tokens_label': 'Unstaking in progress:',
            'unstaking_tokens_count_label': 'Unstakings:',
            'unstaking_tokens_finish_label': 'Available in:',

            'unstaking_tokens_finish_days': 'Days',
            'unstaking_tokens_finish_day': 'Day',


            // Send
            'send_confirm_page_title': 'Confirm',

            'send_page_tab1': 'Send',
            'send_page_tab2': 'IBC send',

            'send_destination_chain_label': 'Destination Chain:',
            'send_address_label': 'Address:',
            'send_amount_label': 'Amount:',

            'send_destination_chain_placeholder': 'Select Chain',

            'send_confirm_chain_from_label': 'From the network:',
            'send_confirm_chain_to_label': 'To the network:',
            'send_confirm_receiver_label': 'Receiver:',
            'send_confirm_fee_label': 'Fee:',


            // Receive
            'receive_page_title': 'Receive',
            'receive_amount_title': 'Choose your amount',
            'receive_amount_label': 'Amount:',


            // Redelegate
            'redelegate_page_title': 'Switch validator',
            'redelegate_confirm_page_title': 'Confirm',
            'redelegate_validator_from_label': 'From:',
            'redelegate_validator_to_label': 'To:',
            'redelegate_confirm_token_label': 'Token:',
            'redelegate_confirm_amount_label': 'Amount:',


            // Tx warning
            'tx_warning_title': 'Warning',
            'tx_warning_desc': "You can still try to make the transaction, but since you don't have enough tokens for gas, it may fail, or it might still go through",


            // Validators
            'validators_page_title': 'Validators:',
            'validatoes_staked_label': 'Staked:',
            'validatoes_available_label': 'Available:',


            // Chains
            'chains_page_title': 'Select Chain',


            // Stats
            'stats_title': 'Staking Profit',
            'stats_token_label': 'Token:',
            'stats_available_label': 'Available:',
            'stats_staked_label': 'Staked:',
            'stats_personal_apr_label': 'Personal APR:',
            'stats_daily_profit_label': 'Est. daily profit:',


            // Wrong seeds
            'wrong_seeds_title': 'Wrong seeds',
            'wrong_seeds_desc': 'Wrong seed phrase. Please try again.',


            // Derivation path
            'derivation_path_title': 'Derivation Path',
            'derivation_path_desc': '<ul><li>You can create multipe addresses from one recovery phrase</li><li>A lost path cannot be recovered</li><li>If you are unfamiliar with this feature, skip or undo this step</li> </ul>',


            // Seed phrase hint
            'seed_phrase_hint_title': 'Seed phrase',


            // Profile
            'profile_title': 'My wallets',


            // Edit wallet modal
            'edit_wallet_name_label': 'Edit wallet name:',
            'edit_wallet_seep_phrase_exp': 'You can see the seed phrases, but you need to go through verification.',


            // Remove wallet
            'remove_wallet_title': 'You are deleting wallet:',
            'remove_wallet_desc': 'Enter the name of the wallet you want to delete. We warn you that you will not be able to return it.',


            // Confirm by pin modal
            'confirm_by_pin_title': 'Confirm by pin',


            // Redelegations
            'redelegations_title': 'Active redelegations',

            'redelegations_finish_days': 'Days',
            'redelegations_finish_day': 'Day',


            // Tokens
            'tokens_page_title': 'Tokens:',


            // Tx fee
            'tx_fee_label': 'Tx Fee:',


            // Tx fee modal
            'tx_fee_modal_title': 'Fee Options',

            'tx_fee_fee_tier_label': 'Fee tier',
            'tx_fee_fee_token_label': 'Fee Token:',
            'tx_fee_gas_adjustment_label': 'Gas Adjustment:',
            'tx_fee_gas_amount_label': 'Gas Amount',

            'tx_fee_remember_label': 'Remember my choise',
            'tx_fee_auto_label': 'Auto',

            'tx_fee_low_label': 'Low',
            'tx_fee_average_label': 'Average',
            'tx_fee_high_label': 'High',


            // Transaction info
            'details_label': 'Details:',
            'memo_label': 'Memo:',


            // Sign transaction fee
            'sign_tx_title': 'Sign transaction',

            'sign_tx_error_title': 'Incorrect pin!',
            'sign_tx_error_desc': 'You have entered an incorrect PIN 4 times. For security reasons, you will be returned to the main screen to protect your account and prevent unauthorized access.',


            // Add IBC channek modal
            'add_IBC_channel_title': 'Add IBC Channel',

            'add_IBC_channel_chain_label': 'Destination Channel ID',
            'add_IBC_channel_id_label': 'Source Channel ID:',

            'add_IBC_channel_error_already_exists': 'Such a pair chain_id and channel_id already exists.',


            // Search
            'search_placeholder': 'Search...',
            'search_empty': 'Token not found...',
            'search_empty_validator': 'Validator not found...',
            'search_empty_chains': 'Chain not found...',


            // Placeholders
            'placeholder_address': 'Enter address',
            'placeholder_amount': '{token} Amount',
            'placeholder_memo': 'Required for sending to CEX',
            'placeholder_memo2': 'Your Custom Memo',
            'placeholder_wallet_name': 'Wallet Name',

            'placeholder_chain_ID': 'Chain ID',
            'placeholder_source_channel_ID': 'Source Channel ID',


            // Notifications
            'notification_copied_title': 'Copied to clipboard',
            'notification_offline_title': 'You are offline',

            'notification_wallet_added_success': 'Wallet added successfully.',
            'notification_wallet_update_success': 'Wallet updated successfully.',
            'notification_wallet_remove_success': '{name} deleted successfully.',

            'notification_add_user_channel_success': 'IBC channel saved successfully.',

            'notification_tx_pending_title': 'Transaction is pending',
            'notification_tx_success_title': 'Success',
            'notification_tx_error_title': 'Error:',

            'notification_error_title': 'Something went wrong, try again later',
            'notification_error_invalid_paste_title': 'Incorrect address in the clipboard',

            'notification_explorer_link': 'Explorer',


            // Buttons
            'btn_add_new_wallet': 'Add New Wallet',
            'btn_from_exist_wallet': 'Create from existing wallet',
            'btn_create_wallet': 'Create new wallet',
            'btn_import_wallet': 'Import wallet',
            'btn_show': 'Ok. Show my phrases',
            'btn_advanced': 'Advanced',
            'btn_next': 'Next',
            'btn_copy': 'Copy to clipboard',
            'btn_copy_small': 'Copy',
            'btn_join': 'Join',
            'btn_biometric': 'Turn on biometric security',
            'btn_biometric2': 'Use biometric',
            'btn_login': 'Log in',
            'btn_send': 'Send',
            'btn_receive': 'Receive',
            'btn_stake': 'Earn',
            'btn_confirm_stake': 'Confirm Staking',
            'btn_confirm_unstake': 'Confirm Unstake',
            'btn_confirm_send': 'Confirm Send',
            'btn_confirm_redelegate': 'Confirm',
            'btn_confirm': 'Confirm',
            'btn_unstake': 'Unstake',
            'btn_redelegate': 'Switch validator',
            'btn_claim': 'Claim',
            'btn_approve': 'Approve',
            'btn_reject': 'Reject',
            'btn_json': 'View JSON',
            'btn_close': 'Close',
            'btn_sign': 'Sign',
            'btn_understood': 'Understood',
            'btn_waiting_tx': 'Waiting tx',
            'btn_MAX': 'MAX',
            'btn_OK': 'Ok',
            'btn_cancel': 'Cancel',
            'btn_amount': 'Amount',
            'btn_share': 'Share',
            'btn_accept': 'Accept',
            'btn_paste': 'Paste',
            'btn_remove': 'Delete',
            'btn_add_chain': 'Add Chain',
            'btn_save': 'Save',
            'btn_try': 'Try',
            'btn_show_seed_phrase': 'Show seed phrase',


            'notification_tx_error_-32603': "tx already exists in cache",
            'notification_tx_error_2': "tx parse error",
            'notification_tx_error_3': "invalid sequence",
            'notification_tx_error_4': "unauthorized",
            'notification_tx_error_5': "insufficient funds",
            'notification_tx_error_6': "unknown request",
            'notification_tx_error_7': "invalid address",
            'notification_tx_error_8': "invalid pubkey",
            'notification_tx_error_9': "unknown address",
            'notification_tx_error_10': "invalid coins",
            'notification_tx_error_11': "Broadcasting transaction failed: out of gas try again and increase gas amount",
            'notification_tx_error_12': "memo too large",
            'notification_tx_error_13': "insufficient fee",
            'notification_tx_error_14': "maximum number of signatures exceeded",
            'notification_tx_error_15': "no signatures supplied",
            'notification_tx_error_16': "failed to marshal JSON bytes",
            'notification_tx_error_17': "failed to unmarshal JSON bytes",
            'notification_tx_error_18': "invalid request",
            'notification_tx_error_19': "tx already in mempool",
            'notification_tx_error_20': "mempool is full",
            'notification_tx_error_21': "tx too large",
            'notification_tx_error_22': "key not found",
            'notification_tx_error_23': "invalid account password",
            'notification_tx_error_24': "tx intended signer does not match the given signer",
            'notification_tx_error_25': "invalid gas adjustment",
            'notification_tx_error_26': "invalid height",
            'notification_tx_error_27': "invalid version",
            'notification_tx_error_28': "invalid chain-id",
            'notification_tx_error_29': "invalid type",
            'notification_tx_error_30': "tx timeout height",
            'notification_tx_error_31': "unknown extension options",
            'notification_tx_error_32': "incorrect account sequence",
            'notification_tx_error_33': "failed packing protobuf message to Any",
            'notification_tx_error_34': "failed unpacking protobuf message from Any",
            'notification_tx_error_35': "internal logic error",
            'notification_tx_error_36': "conflict",
            'notification_tx_error_37': "feature not supported",
            'notification_tx_error_38': "not found",
            'notification_tx_error_39': "Internal IO error",
            'notification_tx_error_40': "error in app.toml",
            'notification_tx_error_41': "invalid gas limit",

            'notification_tx_error_rejected': "The transaction has been rejected",
        }
    }
}