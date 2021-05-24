using Plugin.BLE;
using Plugin.BluetoothClassic.Abstractions;
using System;
using System.Collections.Generic;
using System.Linq;
using System.Text;
using System.Threading.Tasks;

using Xamarin.Forms;
using Xamarin.Forms.Xaml;

namespace Mobile
{
    [XamlCompilation(XamlCompilationOptions.Compile)]
    public partial class SelectDevices : ContentPage
    {
        public SelectDevices()
        {
            InitializeComponent();
            FillBoundedDevices();
        }

        private async void FillBoundedDevices()
        {
            var adapter = DependencyService.Resolve<IBluetoothAdapter>();
            BondedDevices.ItemsSource = adapter.BondedDevices;
         
        }


        private async void BondedDevices_ItemSelected(object sender, SelectedItemChangedEventArgs e)
        {
            var device = (BluetoothDeviceModel)e.SelectedItem;
            if(device != null)
            {
                await Navigation.PushAsync(new Controlmanual() {BindingContext = device });
            }

            BondedDevices.SelectedItem = null;
        }
    }
}