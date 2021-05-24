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
    public partial class Controlmanual : ContentPage
    {
        BluetoothDeviceModel device;
        IBluetoothAdapter adapter;
        IBluetoothConnection connection;
        const int BufferSize = 1;
        const int OffsetDefault = 0;
        public Controlmanual(BluetoothDeviceModel device, IBluetoothAdapter adapter, IBluetoothConnection connection)
        {
            InitializeComponent();
            this.device = device;
            this.adapter = adapter;
            this.connection = connection;
        }

        private async void Button_stop(object sender, EventArgs e)
        {
            //IBluetoothAdapter adapter = DependencyService.Resolve<IBluetoothAdapter>();
            //BluetoothDeviceModel device = (BluetoothDeviceModel)BindingContext;
            if (device != null)
            {
                using (var connection = adapter.CreateConnection(device))
                {
                    if (await connection.RetryConnectAsync(retriesCount: 20))
                    {
                        byte[] buffer = new byte[BufferSize] { (byte)'S' };
                        if (!await connection.RetryTransmitAsync(buffer, OffsetDefault, buffer.Length))
                        {
                            await DisplayAlert("Error", "Cannot send data", "Close");
                        }
                    }
                    else
                    {
                        await DisplayAlert("Error", "Cannot connect.", "Close");
                    }
                }
                   
            }
        }

        private async void Button_in_fata(object sender, EventArgs e)
        {
            //IBluetoothAdapter adapter = DependencyService.Resolve<IBluetoothAdapter>();
            //BluetoothDeviceModel device = (BluetoothDeviceModel)BindingContext;
            if (device != null)
            {
                using (var connection = adapter.CreateConnection(device))
                {
                    if (await connection.RetryConnectAsync(retriesCount: 20))
                    {
                        byte[] buffer = new byte[BufferSize] { (byte)'F' };
                        if (!await connection.RetryTransmitAsync(buffer, OffsetDefault, buffer.Length))
                        {
                            await DisplayAlert("Error", "Cannot send data", "Close");
                        }
                    }
                    else
                    {
                        await DisplayAlert("Error", "Cannot connect.", "Close");
                    }
                }

            }


        }

        private async void Button_OK(object sender, EventArgs e)
        {
            await Navigation.PopAsync();
        }

        private async void Button_spate(object sender, EventArgs e)
        {
            if (device != null)
            {
                using (var connection = adapter.CreateConnection(device))
                {
                    if (await connection.RetryConnectAsync(retriesCount: 20))
                    {
                        byte[] buffer = new byte[BufferSize] { (byte)'B' };
                        if (!await connection.RetryTransmitAsync(buffer, OffsetDefault, buffer.Length))
                        {
                            await DisplayAlert("Error", "Cannot send data", "Close");
                        }
                    }
                    else
                    {
                        await DisplayAlert("Error", "Cannot connect.", "Close");
                    }
                }

            }

        }

        private async void Button_stanga(object sender, EventArgs e)
        {
            //IBluetoothAdapter adapter = DependencyService.Resolve<IBluetoothAdapter>();
           // BluetoothDeviceModel device = (BluetoothDeviceModel)BindingContext;
            if (device != null)
            {
                using (var connection = adapter.CreateConnection(device))
                {
                    if (await connection.RetryConnectAsync(retriesCount: 20))
                    {
                        byte[] buffer = new byte[BufferSize] { (byte)'L' };
                        if (!await connection.RetryTransmitAsync(buffer, OffsetDefault, buffer.Length))
                        {
                            await DisplayAlert("Error", "Cannot send data", "Close");
                        }
                    }
                    else
                    {
                        await DisplayAlert("Error", "Cannot connect.", "Close");
                    }
                }

            }
        }

        private async void Button_dreapta(object sender, EventArgs e)
        {
            //IBluetoothAdapter adapter = DependencyService.Resolve<IBluetoothAdapter>();
            //BluetoothDeviceModel device = (BluetoothDeviceModel)BindingContext;
            if (device != null)
            {
                using (var connection = adapter.CreateConnection(device))
                {
                    if (await connection.RetryConnectAsync(retriesCount: 20))
                    {
                        byte[] buffer = new byte[BufferSize] { (byte)'R' };
                        if (!await connection.RetryTransmitAsync(buffer, OffsetDefault, buffer.Length))
                        {
                            await DisplayAlert("Error", "Cannot send data", "Close");
                        }
                    }
                    else
                    {
                        await DisplayAlert("Error", "Cannot connect.", "Close");
                    }
                }

            }
        }
    }
}